const db = require('../utils/database');
const Schema = db.Schema;

const mongoEjemplo= new Schema({
    
    name: {type: String},
    age:{type: Number}
    

})
const MongoEjemplo = db.model("Ejemplo", mongoEjemplo, "Ejemplo");



/*const postear = async ()=>{
    const ejemplo2 = new MongoEjemplo({
        
        nombre: 'Alberto',
        edad: 30,
        

    })
    const resultado = await ejemplo2.save();
    console.log(resultado);
}
console.log(postear());


const actualizar = async (_id)=>{
    const persona = await MongoEjemplo.updateOne({_id: this.nombre},
    {
            
            nombre: 'Julio Cesar',
            edad: 29,
            

        
    })
}
console.log(actualizar());


const eliminarId = async(_id) =>{

    
    const persona = await MongoEjemplo.deleteOne(_id)
    console.log("se ha borrado la persona " + persona);
    
    console.log(eliminarId());

}*/


module.exports = MongoEjemplo;
/*module.exports ={

    mostrar,
    postear,
    actualizar,
    eliminarId
}*/