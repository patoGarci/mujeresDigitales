var modelUser ={}
var misUsuarios = []
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var UserSchema = new Schema({
    firstname:String,
    email:String,
    age:Number
})

const Mymodel = mongoose.model('users',UserSchema)
modelUser.Guardar= function(post,callback){
    const instace = new Mymodel
    //configurar la instancia
    instace.firstname = post.nombre;
    instace.email = post.email;
    instace.age = post.edad;
    instace.save((error,userCreated) => {
        if(error){
            console.log(error);
        }
        else{
            console.log(userCreated);
            return callback(userCreated)
        }
    })
}

modelUser.Modificar = function(post,callback) {
    Mymodel.findByIdAndUpdate(post.id,{
    firstname:post.nombre,
    age:post.edad}
    ,(error,respuesta)=> {
        if(error){
            console.log(error)
            return callback (error)
        }
        else{
            console.log(respuesta);
            return callback({state:true,mensaje:'usuario actualizado'})
        }
    })
}

modelUser.Listar = function (post,callback) {
    Mymodel.find({},(error,documentos) =>{
        if(error){
            console.log(error)
            return callback (error)
        }
        else{
            console.log(documentos);
            return callback(documentos)
        }
    })
}

modelUser.cargarId = function (post,callback) {
    Mymodel.find({_id:post.id},(error,documentos) =>{
        if(error){
            console.log(error)
            return callback (error)
        }
        else{
            console.log(documentos);
            return callback(documentos)
        }
    })
}

modelUser.Eliminar = function(post,callback) {
    Mymodel.findByIdAndDelete(post.id,(error,resultado)=> {
        if(error){
            console.log(error)
            return callback (error)
        }
        else{
            console.log(resultado);
            return callback({state:true,mensaje:'usuario eliminado'})
        }
    })
}

module.exports.usuariob = modelUser