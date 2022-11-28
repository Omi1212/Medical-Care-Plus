const Mongoose =  require("mongoose");
const Schema = Mongoose.Schema;

const UsuarioSchema= new Schema({
    nombre: {
        type: String,
        trim: true,

    },
    fecha_nacimiento: {
        type: Date,
        trim: true,

    },
    correo: {
        type: String,
        trim: true,
        require: true,
        unique: true
    },
    numero_telefono: {
        type: Number,
        trim: true,

    },
    contrasena: {
        type: String,
        trim: true,

    }
},{timestamps: true});

module.exports = Mongoose.model("Usuario", UsuarioSchema);