import Sprint from "../models/sprint.js"
import sendError from "../utils/errors.js"

const SprintController = {

    getAll: async ( req, res ) => {
        const sprints = await Sprint.findAll()
        return res 
            .status( 200 )
            .json( sprints )
    }, 

    createSprint: async ( req, res ) => {
        const { name, releaseId } = req.body
        const sprintDTO = { name, releaseId }

        try {
            const newSprint = await Sprint.create( sprintDTO )
            return res
                .status( 200 )
                .json( newSprint )
        }
        catch ( error ) { return sendError( res, error ) }
    },

    getSprint: async ( req, res ) => {
        const { id } = req.params

        try {
            const sprint = await Sprint.findByPk( id )
            return res
                .status( 200 )
                .json( sprint )
        }
        catch ( error ) { return sendError( res, error ) }
    },

    updateSprint: async ( req, res ) => {
        const { id } = req.params
        const { name } = req.body
        const sprintDTO = { name, id }

        try {
            const updatedSprint = await Sprint.update( sprintDTO, { where: {id} })
            return res
                .status( 204 )
                .json( updatedSprint )
        }
        catch ( error ) { return sendError( res, error ) }
    },
    
    deleteSprint: async ( req, res ) => {
        const { id } = req.params

        try {
            const deletedSprint = await Sprint.destroy({ where: {id} })
            return res
                .status( 204 )
                .json( deletedSprint )
        }
        catch ( error ) { return sendError( res, error )}
    }
}

export default SprintController
