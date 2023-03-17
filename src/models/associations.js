import Task from "./Task.js"
import Project from "./Project.js"
import Type from "./type.js"
import Sprint from "./sprint.js"

export default associations = () => {
    Task.belongsTo( Sprint )
    Sprint.hasMany( Task )
    Task.belongsTo( Type )
    Sprint.belongsTo( Project )
}