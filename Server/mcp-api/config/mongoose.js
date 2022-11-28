const Mongoose = require("mongoose");
const debug  = require("debug")("app:mongoose")

const dbhost = process.env.DBHOST || "MedicalCare";

const dbpass = process.env.DBPASS || "MC123";

const dbname = process.env.DBNAME || "medicalcareplus";

const dburi = process.env.DBURI || `mongodb+srv://${dbhost}:${dbpass}@${dbname}.g2l3lgn.mongodb.net/MCP`;

const connect = async() =>{
debug(dburi)
try {
    await Mongoose.connect(dburi);
    debug("Conexion a la base exitosa");
} catch (error) {
    debug("Error  en la conexion de la base");
    process.exit(1);
}

}

module.exports = {connect}
