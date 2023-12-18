//Metodo para proteger rutas y a la vez está siendo exportada
module.exports.isAuthenticated = (req,res,next)=>{
    // Si existe una inicio de sesión
    if(req.isAuthenticated()){
        //continuar
        return next()
    }
    //Redireccionamiento 
    res.redirect('/user/login')
}

//Redireccionar a la vista de portafolios  si el menu ya inicio sesión
module.exports.redirectIfAuthenticated = (req, res, next)=>{
    if (req.isAuthenticated()) {
        return res.redirect('/portafolios');
    }
        return next();
}