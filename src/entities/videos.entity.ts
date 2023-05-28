import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Videos {
    @PrimaryColumn()
    owner_id!: string

    @Column()
    name!: string

    @Column()
    description!: string

    @Column()
    transcoding_status?: string

    @Column({ name: "view_count" })
    viewCount!: number
}