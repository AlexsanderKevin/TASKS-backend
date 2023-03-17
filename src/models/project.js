import { Sequelize } from "sequelize"
import database from '../../database.js'

const Project = database.define('projects', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

export default Project
