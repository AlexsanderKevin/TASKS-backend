import Release from "../models/release.js"
import sendError from "../utils/errors.js"

const ReleaseController = {

    getAll: async ( req, res ) => {
        const releases = await Release.findAll()
        return res 
            .status( 200 )
            .json( releases )
    }, 

    createRelease: async ( req, res ) => {
        const { name, projectId } = req.body
        const releaseDTO = { name, projectId }

        try {
            const newRelease = await Release.create( releaseDTO )
            return res
                .status( 200 )
                .json( newRelease )
        }
        catch ( error ) { return sendError( res, error ) }
    },

    getRelease: async ( req, res ) => {
        const { id } = req.params

        try {
            const release = await Release.findByPk( id )
            return res
                .status( 200 )
                .json( release )
        }
        catch ( error ) { return sendError( res, erro ) }
    },

    updateRelease: async ( req, res ) => {
        const { id } = req.params
        const { name } = req.body
        const releaseDTO = { name, id }

        try {
            const updatedRelease = await Release.update( releaseDTO, { where: {id} })
            return res
                .status( 204 )
                .json( updatedRelease )
        }
        catch ( error ) { return sendError( res, error ) }
    },
    
    deleteRelease: async ( req, res ) => {
        const { id } = req.params

        try {
            const deletedRelease = await Release.destroy({ where: {id} })
            return res
                .status( 204 )
                .json( deletedRelease )
        }
        catch ( error ) { return sendError( res, error )}
    }
}

export default ReleaseController
