const express = require('express');
const cors = require('cors');
//const methodOverRide = require('methode-override')


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        // Middlewares
        this.middlewares();
        this.routes();
        
    }
    middlewares(){

        this.app.use(express.static('public'));
        // CORS
        this.app.use(cors());   

        //Parseo y lectura del body
        this.app.use(express.json());

        // directorio público
        //this.app.use(methodOverRide('_method'));
    }

    routes(){
        
        //this.app.use(this.usuariosPath, require('../models/mongoEjemplo'));
        this.app.use(this.usuariosPath, require('../routes/user'));
    }
    

    listen(){
        
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en puerto ', this.port);
        });

    }
}




module.exports = Server;
