const Mongoose =  require("mongoose");
const Schema = Mongoose.Schema;

const EncargadoSchema= new Schema({
    nombre: {
        type: String,
        trim: true,
        require: true
    },
    correo: {
        type: String,
        trim: true,
        require: true,
    },
    numero_telefono: {
        type: Number,
        trim: true,
        require: true
    }
},{timestamps: true});

module.exports = Mongoose.model("Encargado", EncargadoSchema);