import express from "express"
import sequelize from "./database.js"
import User from "./models/user.js"

const app = express()
// Server port
const HTTP_PORT = 3000

// Start server 
app.listen( HTTP_PORT, () => {
    console.log(`Server running at port: ${HTTP_PORT}`)
})

// Root endpoint
app.get('/', ( req, res ) => {
    res.json({ "message": "ok" })
})

const kevin = User.build({ name: "Kevin Alexsander" })
await kevin.save()