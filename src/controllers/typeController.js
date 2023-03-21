import Type from "../models/type.js"
import sendError from "../utils/errors.js"

const TypeController = {

    getAll: async ( req, res ) => {
        const types = await Type.findAll()
        return res 
            .status( 200 )
            .json( types )
    }, 

    createType: async ( req, res ) => {
        const { name } = req.body
        const typeDTO = { name }

        try {
            const newType = await Type.create( typeDTO )
            return res
                .status( 200 )
                .json( newType )
        }
        catch ( error ) { return sendError( res, error ) }
    },

    getType: async ( req, res ) => {
        const { id } = req.params

        try {
            const type = await Type.findByPk( id )
            return res
                .status( 200 )
                .json( type )
        }
        catch ( error ) { return sendError( res, error ) }
    },

    updateType: async ( req, res ) => {
        const { id } = req.params
        const { name } = req.body
        const typeDTO = { name, id }

        try {
            const updatedType = await Type.update( typeDTO, { where: {id} })
            return res
                .status( 204 )
                .json( updatedType )
        }
        catch ( error ) { return sendError( res, error ) }
    },
    
    deleteType: async ( req, res ) => {
        const { id } = req.params

        try {
            const deletedType = await Type.destroy({ where: {id} })
            return res
                .status( 204 )
                .json( deletedType )
        }
        catch ( error ) { return sendError( res, error )}
    }
}

export default TypeController
