const Mongoose =  require("mongoose");
const Schema = Mongoose.Schema;

const RecordatorioSchema= new Schema({
    titulo: {
        type: String,
        trim: true,
        require: true
    },
    fecha_recordatorio: {
        type: Date,
        require: true
    },
    detalle_recordatorio: {
        type: String,
        trim: true,
        require: false      
    }
},{timestamps: true});

module.exports = Mongoose.model("Recordatorio", RecordatorioSchema);