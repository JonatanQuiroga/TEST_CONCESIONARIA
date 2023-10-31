import { Request, Response } from "express";
import { Autos } from "../entities/Autos";

//CREAR NUEVO AUTO
export const createAuto = async (req: Request, res: Response) => {
    try {
        const { modelo, marca, año, precio, cant_disponible } = req.body;

        const auto = new Autos();
        auto.modelo = modelo;
        auto.marca = marca;
        auto.año = año;
        auto.precio = precio;
        auto.cant_disponible = cant_disponible;

        await auto.save();

        return res.json(auto);
    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message: error.message});
        }
    }
}

//VER EL LISTADO DE AUTOS
export const getAutos = async (req: Request, res: Response) => {
    try {
        const autos = await Autos.find();
        return res.json(autos);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

//ACTUALIZAR UN AUTO DEL LISTADO
export const updateAuto = async (req: Request, res: Response) => {
    try {
        const { modelo, marca, año, precio, cant_disponible } = req.body;
        const {id} = req.params

        const auto = await Autos.findOneBy({ id: parseInt(req.params.id) });
        
        if (!auto) return res.status(404).json({ message: "User does not exists"});

        await Autos.update({ id: parseInt(id)}, {
            modelo: req.body.modelo,
            marca: req.body.marca,
            año: req.body.año,
            precio: req.body.precio,
            cant_disponible: req.body.cant_disponible
        })

        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

//ELIMINAR UN AUTO DEL LISTADO
export const deleteAuto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await Autos.delete({ id: parseInt(id) });

        if (result.affected === 0) {
            return res.status(404).json({ message: "User not found"});
        }

        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

//VER EL LISTADO DE AUTOS POR ID
export const getAutoById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const auto = await Autos.findOneBy({ id: parseInt(id) });

        return res.json(auto);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message })
        }
    }
}