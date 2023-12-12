//IMPORTAR ROUTES DE EXPRESS
const {Router} = require('express')
const {renderIndex,renderAbout} = require('../controllers/index.controllers.js')

//INSTANCIAR ROUTES
const router = Router()

router.get('/',renderIndex)
router.get('/login',renderAbout)

/*router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/login',(req,res)=>{
    res.render('login')
})
*/
// EXPORTAR ROUTES
module.exports = router