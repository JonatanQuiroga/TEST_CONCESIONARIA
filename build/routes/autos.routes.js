"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const autos_controller_1 = require("../controllers/autos.controller");
//ENRUTAMIENTO
const router = (0, express_1.Router)();
router.post("/autos", autos_controller_1.createAuto);
router.get("/autos", autos_controller_1.getAutos);
router.put("/autos/:id", autos_controller_1.updateAuto);
router.delete("/autos/:id", autos_controller_1.deleteAuto);
router.get("/autos/:id", autos_controller_1.getAutoById);
exports.default = router;
