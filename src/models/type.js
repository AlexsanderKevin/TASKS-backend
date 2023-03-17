import { Sequelize } from "sequelize"
import database from "../../database.js"
import Task from "./task.js"

const Type = database.define('types', {
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

export default Type
