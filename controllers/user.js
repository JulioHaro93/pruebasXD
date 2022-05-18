const {response, request} = require('express');
require('../utils/database');
const express = require('express');
//const MongoEjemplo = require("../models/mongoEjemplo");
const{mostrar, postear, actualizar, eliminarId} = require("../db/user");
const Usuario = require('../db/user');


const usuariosGet =  (req = request, res = response) =>{
    
    
    const {query} = req.query;
    console.log(query);
    //const mostrar = async ()=> {
    const ejemplo = Usuario.find()
    console.log(ejemplo);
        
        
    //}
    

    res.json({
        

        msg: "get API - controlador",
        query,
        
    });

}

const usuariosPut = (req, res = response) =>{

    const id = req.params.id;

    user.actualizar();
    res.json({
        
        msg: "put API - controlador",
        id
    });
}

const usuariosPost = (req, res = response) =>{

    const {nombre, edad} = req.body;
    const user = new Usuario({name: nombre, age: edad});
    user.save();
    res.json({
        
        msg: "post API - controlador",
        nombre,
        edad,
        
    });
}
const usuariosDelete = (req, res = response) =>{
    user.deleteOne(_id);
    res.json({
        
        msg: "delete API - controlador",
    });
}

const usuariosPatch = (req, res = response) =>{
    res.json({
        
        msg: "patch API - controlador",
    });
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch,
    //actualizar,
    //eliminarPorNombre,
    //eliminarUltimo
}
