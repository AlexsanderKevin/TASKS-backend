import { Router } from "express";
import ProjectController from "../controllers/projectController.js"

const { getAll, createProject, getProject, updateProject, deleteProject } = ProjectController

const router = Router()

router.get( '/projects', getAll )
router.post( '/projects', createProject )
router.get( '/projects/:id', getProject )
router.put( '/projects/:id', updateProject )
router.delete( '/projects/:id', deleteProject )

export default router
