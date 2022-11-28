const Encargado = require("../models/Encargado.model");

const controller = {};

controller.create = async (req, res ) =>{
    const {nombre,correo,numero_telefono} = req.body;

    const encargado = new Encargado({
        nombre:nombre,
        correo:correo,
        numero_telefono:numero_telefono,
    });

    const newEncargado =await encargado.save();

    if (!newEncargado) {
        return res.status(409).json({erorr: "Ocurrio un error al crear el encargado"});
    }

    return res.status(201).json(newEncargado);
}



module.exports = controller;