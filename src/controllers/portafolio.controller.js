const Portfolio = require('../models/Portafolio')

const renderAllPortafolios = async(req,res)=>{
    const portfolios = await Portfolio.find().lean()
    res.render("portafolio/allPortfolios",{portfolios})
}


const renderPortafolio = (req,res)=>{
    res.send('Mostrar el detalle de un portafolio')
}

const renderPortafolioForm = (req,res)=>{
    res.render('portafolio/newFormPortafolio')
}


/*
const createNewPortafolio =async (req,res)=>{
    const {title, category,description} = req.body
    const newPortfolio = new Portfolio({title,category,description})
    await newPortfolio.save()
    //res.json({newPortfolio})
    
}
*/
const createNewPortafolio =async (req,res)=>{
    const {title, category,description} = req.body
    const newPortfolio = new Portfolio({title,category,description})
    await newPortfolio.save()
    res.redirect('/portafolios')
}


/*const renderEditPortafolioForm = (req,res)=>{
    res.send('Formulario para editar un portafolio')
}*/
const renderEditPortafolioForm =async(req,res)=>{
    //Consulta del portafolio en BDD con el ID
    const portfolio = await Portfolio.findById(req.params.id).lean()
    //Mandar a la vista
    res.render('portafolio/editPortfolio',{portfolio})
}
/*
const updatePortafolio = (req,res)=>{
    res.send('Editar un portafolio')
}*/
//METODO PARA ACTUALIZAR EN LA BBD LO CAPTURADO EN EL FORM
const updatePortafolio = async(req,res)=>{
    //CAPTURAR LOS DATOS DEL BODY
    const {title,category,description}= req.body
    //ACTUALIZAR EL LEL PORTAFOLIO EN BBD
    await Portfolio.findByIdAndUpdate(req.params.id,{title,category,description})
    //REDIRECCIONAR
    res.redirect('/portafolios')
}

//Metodo para eliminar portafolios
/*const deletePortafolio = (req,res)=>{
    res.send('Eliminar un nuevo portafolio')
}*/
const deletePortafolio = async(req,res)=>{
    await Portfolio.findByIdAndDelete(req.params.id)
    res.redirect('/portafolios')
}

//EXPORTACION COMMONJS NOMBRADA - DEFAULT
module.exports ={
    renderAllPortafolios,
    renderPortafolio,
    renderPortafolioForm,
    createNewPortafolio,
    renderEditPortafolioForm,
    updatePortafolio,
    deletePortafolio
}