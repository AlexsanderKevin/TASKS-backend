import { Sequelize } from "sequelize"
import database from "../../database.js"
import Project from "./project.js"
import Sprint from "./sprint.js"

const Release = database.define('releases', {
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

Release.hasMany( Sprint )

export default Release
