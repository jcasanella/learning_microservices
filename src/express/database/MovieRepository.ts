import { DataSource, Repository } from 'typeorm';
import { Movies } from '../../entities/movies.entity';

export class MovieRepository extends Repository<Movies> {
    constructor(readonly dataSource: DataSource){
        super(Movies, dataSource.createEntityManager());
    }

    async getAll(): Promise<Movies[]> {
        return await this.find();
    }

    async getById(id: string): Promise<Movies|null> {
        return await this.findOneBy({ id });
    }

}