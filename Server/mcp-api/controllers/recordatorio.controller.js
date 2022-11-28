const Recordatorio = require("../models/Recordatorio.model");

const controller = {};

controller.create = async (req, res ) =>{
    const {titulo,fecha_recordatorio,detalle_recordatorio} = req.body;

    const recordatorio = new Recordatorio({
        titulo:titulo,
        fecha_recordatorio:fecha_recordatorio,
        detalle_recordatorio:detalle_recordatorio,
    });

    const newRecordatorio =await recordatorio.save();

    if (!newRecordatorio) {
        return res.status(409).json({erorr: "Ocurrio un error al crear el recordatorio"});
    }

    return res.status(201).json(newRecordatorio);
}



module.exports = controller;