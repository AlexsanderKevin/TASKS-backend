import express from "express"
import bodyParser from "body-parser"
import { initDatabase } from "./database.js"
import * as dotenv from 'dotenv'
import mainRoutes from "./src/routes/main.js"
import userRoutes from "./src/routes/user.js"
import projectRoutes from "./src/routes/project.js"
import releaseRoutes from "./src/routes/release.js"
import sprintRoutes from "./src/routes/sprint.js"
import typeRoutes from "./src/routes/type.js"

dotenv.config()
const app = express()

initDatabase()

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({ extended: true }))

app.use( mainRoutes )
app.use( userRoutes )
app.use( projectRoutes )
app.use( releaseRoutes )
app.use( sprintRoutes )
app.use( typeRoutes )

app.listen( process.env.HTTP_PORT, () => console.log(`Server running at port: ${process.env.HTTP_PORT}`))
