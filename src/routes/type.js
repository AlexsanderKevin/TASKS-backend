import { Router } from "express"
import TypeController from "../controllers/typeController.js"

const { getAll, getType, createType, updateType, deleteType } = TypeController

const router = Router()

router.get( '/types', getAll )
router.get( '/types/:id', getType )
router.post( '/types', createType )
router.put( '/types/:id', updateType )
router.delete( '/types/:id', deleteType )

export default router
