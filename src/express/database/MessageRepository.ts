import { DataSource, Repository } from "typeorm";
import { Messages } from "../../entities/messages.entity";

export class MessageRepository extends Repository<Messages> {
    constructor(readonly dataSource: DataSource){
        super(Messages, dataSource.createEntityManager());
    }

    async append(id: string): Promise<void> {
        
    }
}