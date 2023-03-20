import { Router } from "express"
import ReleaseController from "../controllers/releaseController.js"

const { getAll, getRelease, createRelease, updateRelease, deleteRelease } = ReleaseController

const router = Router()

router.get( '/releases', getAll )
router.get( '/releases/:id', getRelease )
router.post( '/releases', createRelease )
router.put( '/releases/:id', updateRelease )
router.delete( '/releases/:id', deleteRelease )

export default router
