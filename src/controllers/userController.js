import User from "../models/user.js"

const UserController = {

  getAll: async ( req, res ) => {
    const users = await User.findAll()
    return res.status( 200 ).json( users )
  },

  createUser: async ( req, res ) => {
    const { name } = req.body
    const userDTO = { name }

    try {
      const newUser = await User.create( userDTO )
      return res.status( 201 ).json( newUser )
    } 
    catch ( error ) {
      console.log( error )
      return res
        .status( 500 )
        .json({ message: 'Internal server error' })
    }
  },

  getUser: async ( req, res ) => {
    const { id } = req.params

    try {
      const user = await User.findByPk( id )
      return res.status( 200 ).json( user )
    }
    catch ( error ) {
      console.log( error )
      return res.status( 500 ).json({ message: 'Internal server error' })
    }
  },

  updateUser: async ( req, res ) => {
    const { id } = req.params
    const { name } = req.body
    const userDTO = { name }

    try {
      const updatedUser = await User.update( userDTO, { where: { id }, returning: true })
      return res.status( 204 ).json( updatedUser )
    }
    catch ( error ) {
      console.log( error )
      return res.status( 500 ).json({ message: 'Internal server error' })
    }
  },

  deleteUser: async ( req, res ) => {
    const { id } = req.params

    try {
      const deletedUser = await User.destroy({ where: { id }})
      return res.status( 204 ).json( deletedUser )
    }
    catch ( error ) {
      console.log( error )
      return res.status( 500 ).json({ message: 'Internal server error' })
    }
  }
}

export default UserController
