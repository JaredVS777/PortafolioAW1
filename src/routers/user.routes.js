const {Router} = require('express')
const { renderRegisterForm, registerNewUser, renderLoginForm, loginUser, logoutUser } = require('../controllers/user.controller')
const { redirectIfAuthenticated } = require('../helpers/validate-auth')
//Instanciar la variable router
const router = Router()


//Ruta para mostrar el formulario de registro
router.get('/user/register',renderRegisterForm)
//Ruta para capturar los datos del formulario y almacenar en BDD
router.post('/user/register',registerNewUser)

//Ruta para mostrar el formulario de Login
router.get('/user/login',redirectIfAuthenticated,renderLoginForm)

router.post('/user/login',loginUser)

//Ruta para cerrar sesion del usuario
router.post('/user/logout',logoutUser)


module.exports =router