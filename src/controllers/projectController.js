import Project from "../models/project.js";
import sendError from "../utils/errors.js";

const ProjectController = {

    getAll: async ( req, res ) => {
        const projects = await Project.findAll()
        return res
            .status( 200 )
            .json( projects )
    },

    createProject: async ( req, res ) => {
        const { name } = req.body
        const projectDTO = { name }

        try {
            const newProject = await Project.create( projectDTO )
            return res
                .status( 201 )
                .json( newProject )
        }
        catch ( error ) { return sendError( res, error )}
    },

    getProject: async ( req, res ) => {
        const { id } = req.params

        try {
            const project = await Project.findByPk( id )
            return res
                .status( 200 )
                .json( project )
        }
        catch ( error ) { return sendError( res, error )}
    },

    updateProject: async ( req, res ) => {
        const { id } = req.params
        const { name } = req.body
        const projectDTO = { name }

        try {
            const updatedProject = await Project.update( projectDTO, { where: {id} })
            return res
                .status( 204 )
                .json( updatedProject )
        }
        catch ( error ) { return sendError( res, erro ) }
    },

    deleteProject: async ( req, res ) => {
        const { id } = req.params

        try {
            const deletedProject = await Project.destroy({ where: {id} })
            return res
                .status( 204 )
                .json( deletedProject )
        }
        catch ( error ) { return sendError( res, error )}
    }
}

export default ProjectController
