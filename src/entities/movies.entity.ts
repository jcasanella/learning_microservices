import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Movies {
    @PrimaryGeneratedColumn()
    id!: string

    @Column()
    title!: string

    @Column()
    summary!: string

    @Column({ name: 'short_summary' })
    shortSummary!: string;

    @Column()
    genre?: string

    @Column()
    rating!: number

    @Column("text", { array: true })
    actors?: string[]

    @Column({ name: 'cover_picture' })
    coverPicture?: string
}