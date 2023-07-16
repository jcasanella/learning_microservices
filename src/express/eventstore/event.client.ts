import { AppendResult, EventData, EventStoreDBClient, EventType, FORWARDS, ResolvedEvent, START, StreamingRead } from "@eventstore/db-client";

export class EventClient {
    private client;

    constructor(host:string, port:string) {
        this.client = new EventStoreDBClient({ endpoint: `${host}:${port}`});
    }

    readStream<T extends EventType>(streamName: string): StreamingRead<ResolvedEvent<T>> {
        this.client.readStream
        return this.client.readStream<T>(streamName, { fromRevision: START, direction: FORWARDS, maxCount: 10 });
    }

    async appendStream<T extends EventType>(streamName: string, event: EventData<T>): Promise<AppendResult> {
        return await this.client.appendToStream(streamName, event);
    }
}