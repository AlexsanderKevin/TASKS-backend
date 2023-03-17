import { Sequelize } from "sequelize"
import database from '../../database.js'
import Release from './release.js'

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

Project.hasMany( Release )

export default Project
