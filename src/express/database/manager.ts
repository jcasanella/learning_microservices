import { DataSource, Repository } from 'typeorm';
import { Videos } from '../models/video';

export class VideoRepository extends Repository<Videos> {
    constructor(readonly dataSource: DataSource){
        super(Videos, dataSource.createEntityManager());
    }

    async getAll(): Promise<Videos[]> {
        return await this.find();
    }

}