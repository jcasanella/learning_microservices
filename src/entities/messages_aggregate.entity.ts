import { Column, Entity } from "typeorm";

@Entity({ schema: 'event_store', name: 'messages_aggregate' })
export class MessagesAggregate {
    // a string name of the stream this event belongs to
    @Column({ name: 'stream_name' })
    streamName!: string;

    // id of the stream
    @Column({ type: 'uuid' })
    id!: string;

    // used for optimistic lock. denotes a particular message's position within its stream
    @Column()
    version!: number;

    static createNewMessagesAggregate(streamName: string, id: string, version: number) {
        const messagesAggregate = new MessagesAggregate();
        messagesAggregate.id = id;
        messagesAggregate.streamName = streamName;
        messagesAggregate.version = version;

        return messagesAggregate;
    }
}
