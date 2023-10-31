import { Router } from "express";
import { createAuto, getAutos, updateAuto, deleteAuto, getAutoById } from "../controllers/autos.controller";

//ENRUTAMIENTO HACER PRUEBAS CON POSTMAN O SIMILAR

const router = Router()

router.post("/autos", createAuto)
router.get("/autos", getAutos)
router.put("/autos/:id", updateAuto)
router.delete("/autos/:id", deleteAuto)
router.get("/autos/:id", getAutoById)

export default router