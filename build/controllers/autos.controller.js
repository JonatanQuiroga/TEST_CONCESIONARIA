"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAutoById = exports.deleteAuto = exports.updateAuto = exports.getAutos = exports.createAuto = void 0;
const Autos_1 = require("../entities/Autos");
//CREAR NUEVO AUTO
const createAuto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { modelo, marca, año, precio, cant_disponible } = req.body;
        const auto = new Autos_1.Autos();
        auto.modelo = modelo;
        auto.marca = marca;
        auto.año = año;
        auto.precio = precio;
        auto.cant_disponible = cant_disponible;
        yield auto.save();
        return res.json(auto);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.createAuto = createAuto;
//VER EL LISTADO DE AUTOS
const getAutos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const autos = yield Autos_1.Autos.find();
        return res.json(autos);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getAutos = getAutos;
//ACTUALIZAR UN AUTO DEL LISTADO
const updateAuto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { modelo, marca, año, precio, cant_disponible } = req.body;
        const { id } = req.params;
        const auto = yield Autos_1.Autos.findOneBy({ id: parseInt(req.params.id) });
        if (!auto)
            return res.status(404).json({ message: "User does not exists" });
        yield Autos_1.Autos.update({ id: parseInt(id) }, {
            modelo: req.body.modelo,
            marca: req.body.marca,
            año: req.body.año,
            precio: req.body.precio,
            cant_disponible: req.body.cant_disponible
        });
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.updateAuto = updateAuto;
//ELIMINAR UN AUTO DEL LISTADO
const deleteAuto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield Autos_1.Autos.delete({ id: parseInt(id) });
        if (result.affected === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.deleteAuto = deleteAuto;
//VER EL LISTADO DE AUTOS POR ID
const getAutoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const auto = yield Autos_1.Autos.findOneBy({ id: parseInt(id) });
        return res.json(auto);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getAutoById = getAutoById;
