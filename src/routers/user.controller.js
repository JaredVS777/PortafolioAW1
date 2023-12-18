const renderRegisterForm =(req,res)=>{
    res.render('user/registerForm')
}

const registerNewUser =(req,res)=>{
    res.send('register new user')
}
const renderLoginForm =(req,res)=>{
    res.render('user/loginForm')
}

const loginUser =(req,res)=>{
    res.send('login user')
}

const logoutUser =(req,res)=>{
    res.send('logout user')
}
//Exportar la variable router
module.exports={
    renderRegisterForm,
    registerNewUser,
    renderLoginForm,
    loginUser,
    logoutUser
}