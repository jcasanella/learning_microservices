import { DataSource, Repository } from "typeorm";
import { Messages } from "../../entities/messages.entity";
import { MessagesAggregate } from "../../entities/messages_aggregate.entity";

export class MessageRepository extends Repository<Messages> {
    constructor(readonly dataSource: DataSource){
        super(Messages, dataSource.createEntityManager());
    }

    async append(message: Messages): Promise<void> {
        const { streamName, id } = message;

        await this.dataSource.transaction(async transactionEntityManager => {
            const lockMessagesAggregate = await transactionEntityManager
                .createQueryBuilder(MessagesAggregate, 'messagesAggregate')
                .where('messagesAggregates.streamName = :streamName', {streamName})
                .andWhere('messagesAggregate.id =:id', {id})
                .setLock('optimistic', 1)
                .getOne();

            let version = lockMessagesAggregate?.version || 0;
            console.log(`Current version ${version} for ${streamName} ${id}`);
            version += 1;

            // Save row message
            message.version = version;
            this.save(message);

            // Update row 
            
        });
    }
}