import { Sequelize } from "sequelize"
import database from "../../database.js"
import Release from "./release.js"
import Task from './task.js'

const Sprint = database.define('sprints', {
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

Sprint.hasMany( Task )

export default Sprint

