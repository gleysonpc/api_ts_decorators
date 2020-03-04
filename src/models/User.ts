import {
    Column,
    DataType,
    Model,
    Table,
    CreatedAt,
    UpdatedAt,
    BeforeCreate,
    HasMany
} from 'sequelize-typescript'
import bcrypt from 'bcryptjs'
import Post from './Post'

@Table({
    defaultScope: {
        attributes: { exclude: ['password'] }
    },
    scopes: {
        withPassword: {
            attributes: { include: ['password']}
        }
    },
    paranoid: false,
    deletedAt: false,
    tableName: 'users'
})
   
export default class User extends Model<User> {
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
    name!: string

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    email!: string

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    password!: string

    @CreatedAt
    created_at!: Date

    @UpdatedAt
    updated_at!: Date

    @BeforeCreate
    static hashPassword(instance: User) {
        const hashedPass = bcrypt.hashSync(instance.password, 10)
        instance.password = hashedPass
    }

    @HasMany(() => Post)
    posts!: Post[]
}
