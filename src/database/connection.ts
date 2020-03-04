import 'dotenv/config'
import { Sequelize } from 'sequelize-typescript'
import loadModels from './loadModels'

const DB_URL = process.env.DB_URL

const sequelize = new Sequelize(DB_URL as string, {
    dialectOptions: {
        charset: "utf8",
        multipleStatements: true,
    },
    logging: false,
    models: loadModels
})

export default sequelize