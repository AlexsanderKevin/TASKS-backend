import { Sequelize } from 'sequelize'
import * as dotenv from 'dotenv'
import associations from './src/models/associations.js'

dotenv.config()

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: process.env.DB_FILE
})

export const initDatabase = () => {
    sequelize
        .sync()
        .then(() => {
            console.log('All tables created!')
            associations()
        })
        .catch(( error ) => console.error('Error creating tables:', error))
}

export default sequelize
