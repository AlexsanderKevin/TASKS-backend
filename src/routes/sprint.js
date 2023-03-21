import { Router } from "express"
import SprintController from "../controllers/sprintController.js"

const { getAll, getSprint, createSprint, updateSprint, deleteSprint } = SprintController

const router = Router()

router.get( '/sprints', getAll )
router.get( '/sprints/:id', getSprint )
router.post( '/sprints', createSprint )
router.put( '/sprints/:id', updateSprint )
router.delete( '/sprints/:id', deleteSprint )

export default router
