import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ schema: 'event_store' })
export class Messages {
    // position within the entire table
    @PrimaryGeneratedColumn({ name: 'global_position' })
    globalPosition!: number;

    // a string name of the stream this event belongs to
    @Column({ name: 'stream_name' })
    streamName!: string;

    // id of the stream
    @Column({ type: 'uuid' })
    id!: string;

    // used for optimistic lock. denotes a particular message's position within its stream
    @Column()
    version!: number;

    // Metadata of the event
    @Column({ type: 'jsonb' })
    metadata?: string;

    // Content of the event
    @Column({ type: 'jsonb' })
    data?: string;

    // Captures when the message was written to the Db
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    time?: Date;
}
