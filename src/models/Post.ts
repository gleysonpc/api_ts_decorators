import {
    Column,
    DataType,
    Model,
    Table,
    CreatedAt,
    UpdatedAt,
    BelongsTo,
    ForeignKey
} from 'sequelize-typescript'
import User from './User'

@Table({
    paranoid: false,
    deletedAt: false,
    tableName: 'posts'
})

export default class Post extends Model<User> {
    @Column({
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER
    })
    id!: number

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    title!: string

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    body!: string

    @CreatedAt
    created_at!: Date

    @UpdatedAt
    updated_at!: Date

    @ForeignKey(() => User)
    @Column
    user_id!: number

    @BelongsTo(() => User)
    user!: User

}
