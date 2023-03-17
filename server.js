import express from "express"
import mainRoutes from "./src/routes/main.js"
import userRoutes from "./src/routes/user.js"
import bodyParser from "body-parser"
import { initDatabase } from "./database.js"
import * as dotenv from 'dotenv'

dotenv.config()
const app = express()

initDatabase()

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({ extended: true }))

app.use( mainRoutes )
app.use( userRoutes )

app.listen( process.env.HTTP_PORT, () => console.log(`Server running at port: ${process.env.HTTP_PORT}`))
