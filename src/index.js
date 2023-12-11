//Cargar todas las variables de entorno
require('dotenv').config()
//const { connection } = require('mongoose');
const app = require('./server.js')

// Importar el medoto conecction
const connection = require('./database.js')
connection()
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${3000}`);

})
