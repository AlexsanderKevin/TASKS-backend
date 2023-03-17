import { Sequelize } from "sequelize";
import database from "../../database.js"
import Sprint from "./sprint.js";
import Type from "./type.js"

const Task = database.define('tasks', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    code: {
        type: Sequelize.STRING,
        allowNull: false,
    }, 
    title: {
        type: Sequelize.STRING,
        allowNull: true,
    }
})

export default Task
