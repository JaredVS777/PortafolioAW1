//Importar el esquema y modelo
const {Schema, model} = require('mongoose')
//Crear un nuevo esquema 
const portfolioSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    category :{
        type:String,
        require:true
    }
},{
    timestamps:true
})
//exportar el modelo 
module.exports = model('portfolio',portfolioSchema)