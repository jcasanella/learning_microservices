import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Videos {
    @PrimaryColumn({ name: "owner_id" })
    ownerId!: string

    @Column()
    name!: string

    @Column()
    description!: string

    @Column({ name: "transcoding_status" })
    transcodingStatus?: string

    @Column({ name: "view_count" })
    viewCount!: number
}