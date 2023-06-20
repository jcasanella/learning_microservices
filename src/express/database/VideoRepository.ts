import { DataSource, Repository } from 'typeorm';
import { Videos } from '../../entities/videos.entity';

export class VideoRepository extends Repository<Videos> {
    constructor(readonly dataSource: DataSource){
        super(Videos, dataSource.createEntityManager());
    }

    async getAll(): Promise<Videos[]> {
        return await this.find();
    }

    async getById(id: string): Promise<Videos|null> {
        return await this.findOneBy({ ownerId: id });
    }

}