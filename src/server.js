const express = require('express')
const path = require('path');
//Importar handlebars
const { engine }  = require('express-handlebars')
const methodOverride = require('method-override');
//Importacion de passport
const passport = require('passport');
//importacion de express-session
const session = require('express-session');



// Inicializaciones
const app = express()
//
require('./config/passport')

// Configuraciones 
app.set('port',process.env.port || 3000)
app.set('views',path.join(__dirname, 'views'))

//Establcer el path de las carpetas views
app.set('views',path.join(__dirname, 'views'))
//Establcer las configuraciones extras
app.engine('.hbs',engine({
    //establecer el master page
    defaultLayout:'main',
    //establecer el path de la carpeta layouts
    layoutsDir: path.join(app.get('views'),'layouts'),
    //establecer el path de la carpeta partials
    partialsDir: path.join(app.get('views'),'partials'),
    //establecer la extension de imagenes 
    extname:'.hbs'
}))
app.set('view engine','.hbs')

// Middlewares 
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))
//Configurar la sesion del usuario
app.use(session({ 
    secret: 'secret',
    resave:true,
    saveUninitialized:true
}));
//Inicializar passportjs y session
app.use(passport.initialize())
app.use(passport.session())


// Variables globales
//Crear una variable global 
app.use((req,res,next)=>{
    res.locals.user = req.user?.name || null
    next()
})

// Rutas
app.use(require('./routers/index.routes')) 
app.use(require('./routers/portafolio.routes'))
app.use(require('./routers/user.routes'))

/*
app.get('/',(req,res)=>{
    res.render("index");
})
*/
// Archivos estáticos
app.use(express.static(path.join(__dirname,'public')))


module.exports = app


/*
//Importacion express
const express = require('express')
const path = require('path')
//instanciar express
const app = express()

//configuraciones 
//Variables de configuracion
let port = 3000
app.set('port',process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))

//Middlewares
//Servidor va a trabajar con informacion en base a formularios
app.use(express.urlencoded({extended}))

//rutas

//primera ruta
app.get('/',(req, res) => {
    res.send("Server ")


})

let views ="C:\Users\User\Documents\portafolioAW\src\server.js"
module.exports = app
*/