var modelUsuarios = require(appRoot + '/api/models/userModel.js').usuariob
var MD5 = require('md5')
var userController = {}

userController.Guardar=function(request,response) {
    var post = {
        nombre:request.body.nombre,
        email:request.body.email,
        edad:request.body.edad
    }
    if (post.nombre=="" || post.nombre == null || post.nombre == undefined) {
         response.json({state:false,mensaje:"El campo nombre es obligatorio"})
        return false
    }
    if (post.email=="" || post.email == null || post.email == undefined) {
        response.json({state:false,mensaje:"El campo email es obligatorio"})
        return false
    }
    if (post.edad=="" || post.edad == null || post.edad == undefined) {
    response.json({state:false,mensaje:"El campo edad es obligatorio"})
        return false
    }
    modelUsuarios.Guardar(post,function(respuesta) {
        response.json(respuesta)
    })
}

//email y el usuario no deben modificarse
userController.Modificar=function(request,response) {
    var post = {
        nombre:request.body.nombre,
        edad:request.body.edad,
        id:request.body.id
    }
    if (post.id =="" || post.id == null || post.id == undefined) {
        response.json({state:false,mensaje:"id es obligatorio"})
        return false
    }
    if (post.nombre=="" || post.nombre == null || post.nombre == undefined) {
         response.json({state:false,mensaje:"nombre es obligatorio"})
        return false
    }
        // console.log(post)
    if (post.edad =="" || post.edad == null || post.edad == undefined) {
    response.json({state:false,mensaje:"edad es obligatorio"})
        return false
    }

    modelUsuarios.Modificar(post,function(respuesta) {
      console.log(respuesta)
        response.json(respuesta)
    })
}

userController.Eliminar=function(request,response) {
    var post = {
        id:request.body.id
    }
    //dara una posicion mediante la validacion
    if (post.id=="" || post.id == null || post.id == undefined)
    //cambia de post.posicion por post.id
     {
        response.json({state:false,mensaje:"id es obligatorio"})
        return false
    }

    modelUsuarios.Eliminar(post,function(respuesta) {
        response.json(respuesta)
    })
}

userController.Listar=function(request,response) {
    //null es pq no se esta enviando nada
   modelUsuarios.Listar(null,function(respuesta) {
        response.json(respuesta)
    })
}

userController.cargarId=function(request,response) {
    var post = {
        id:request.body.id
    }
    if (post.id=="" || post.id == null || post.id == undefined) {
        response.json({state:false,mensaje:"id es obligatorio"})
       return false
   }
    modelUsuarios.cargarId(post,function(respuesta) {
         response.json(respuesta)
     })
}

module.exports.usuario = userController
