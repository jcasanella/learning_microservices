import { DataSource, Repository } from 'typeorm';
import { Messages } from '../../entities/messages.entity';
import { MessagesAggregate } from '../../entities/messages_aggregate.entity';

export class MessageRepository extends Repository<Messages> {
    constructor(readonly dataSource: DataSource){
        super(Messages, dataSource.createEntityManager());
    }

    async append(message: Messages): Promise<void> {
        const { streamName, id } = message;

        await this.dataSource.transaction(async transactionEntityManager => {
            const lockMessagesAggregate = await transactionEntityManager
                .createQueryBuilder(MessagesAggregate, 'messagesAggregateSelect')
                .where('messagesAggregates.streamName = :streamName', {streamName})
                .andWhere('messagesAggregate.id =:id', {id})
                .setLock('optimistic', 1)
                .getOne();

            const messagesAggregate = lockMessagesAggregate ?? MessagesAggregate.createNewMessagesAggregate(streamName, id, 0);
            messagesAggregate.version += 1;

            console.log(`Current version ${messagesAggregate.version} for ${streamName} ${id}`);

            // Save row message
            message.version = messagesAggregate.version;
            this.save(message);

            // Update row 
            await transactionEntityManager.getRepository(MessagesAggregate).save(messagesAggregate);
        });
    }
}