//Importar sema y el modelo
const {Schema, model} = require('mongoose')
//Importar BCRYPT
const bcrypt = require('bcryptjs')
// Crear un esquema --userSchema
const userSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password :{
        type:String,
        require:true
    }
},{
    timestamps:true
})

// Método para cifrar el password del usuario
userSchema.methods.encrypPassword = async (password)=>{
    //establecer los saltos paraa encriptar el password
    const salt = await bcrypt.genSalt(10)
    //encriptar el password
    const passwordEncryp = await bcrypt.hash(password,salt)
    //retorna el password encriptado
    return passwordEncryp
}

// Método para verificar si el password ingresado es el mismo de la BDD
userSchema.methods.matchPassword = async function(password){
    //Utilizar el metodo compare
    const response = await bcrypt.compare(password,this.password)
    //retornar el booleano 
    return response
}

//Exportar el modelo
module.exports = model('user',userSchema)