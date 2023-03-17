import { Router } from "express";
import ProjectController from "../controllers/projectController.js"

const { getAll } = ProjectController

const router = Router()

router.get( '/projects', getAll )

export default router
