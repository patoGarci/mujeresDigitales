var msj = function(){
    var containerMsj = document.getElementById("msj");
    containerMsj.innerHTML = '<div class="alert alert-primary" role="alert" id="msj">'
        + 'hola'+
    '</div>'
}

var iniciarSesion = function(){
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    if(email == null || email == '' || email == undefined){
        alert("email obligatorio");
        msj();
        return false
    }
    if(password == null || password == '' || password == undefined){
        alert("pasword obligatorio")
        return false
    }
}

