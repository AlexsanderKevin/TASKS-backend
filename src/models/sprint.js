import { Sequelize } from "sequelize"
import database from "../../database.js"

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

export default Sprint

