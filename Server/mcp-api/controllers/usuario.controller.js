const Usuario = require("../models/Usuario.model");

const controller = {};

controller.create = async (req, res ) =>{
    const {nombre,fecha_nacimiento,correo,numero_telefono,contrasena} = req.body;

    const usuario = new Usuario({
        nombre:nombre,
        fecha_nacimiento:fecha_nacimiento,
        correo:correo,
        numero_telefono:numero_telefono,
        contrasena:contrasena
    });

    const newUsuario =await usuario.save();

    if (!newUsuario) {
        return res.status(409).json({erorr: "Ocurrio un error al crear el usuario"});
    }

    return res.status(201).json(newUsuario);
}



module.exports = controller;