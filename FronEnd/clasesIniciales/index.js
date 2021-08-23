
        var cadena = "el resultado es:"
        var a = '5';
        var b = 4;
        var c = a * b
        alert(cadena + c)
        var valor = 1000;
        var estado = true;
        var estado2= false;
        var cantidad = 1.5
        valor1 = 2
        valor2 = 4
        
        var multiplicar = function(){
            console.log(valor1 * valor2)
        }
        var sumar = function(){
            console.log(valor1 + valor2)
        }
        var restar = function(){
            console.log(valor1 - valor2)
        }
        var dividir = function(){
            console.log(valor1 / valor2)
        }
        var nombre = "patricia";
        var apellido = "garcia";
        var nombreCompleto =  function(){
            console.log(nombre +" "+ apellido)
        }
        var obtenerDatos = function(){
            var a = document.getElementById("nombre").value
            console.log(a)
            var b = document.getElementById("apellido").value
            var num1 = parseInt(a)
            var num2= parseInt(b)
        }
       for(var i=0; i <=20; i ++){
        console.log('5 '+'X '+ i + '= ' + (5 * i))
        var tablaMultiplicar= document.getElementById("tablaMultiplicar")
        tablaMultiplicar.innerHTML = tablaMultiplicar.innerHTML + '5 X '+ i + '= 5<br>'
       }
       var dato1 = 4
       var dato2= 5
       if(dato1 > dato2){
           console.log("cumplida la condicion")
       }else{
        console.log("no cumplida la condicion")
       }
       if(1==2 || 4==4){
           console.log("cumplida la condicion")
       }else{
        console.log("no cumplida la condicion")
       }
       var listaDatos = [0,1,"patricia",3,4,5,6,100]
       console.log(listaDatos[2])
       var agregar = function(){
           var agrega= document.getElementById("agrega").value
           listaDatos.push(agrega)
        //    console.log(listaDatos)
       }
       var datos = []
       datos.push("a")
       datos.push("b")
       datos.push("c")
       datos.push("d")
       for(var i =0;i < datos.length; i++){
           tablaMultiplicar.innerHTML =tablaMultiplicar.innerHTML + datos[i]+" <br>"
       }
var miVariableArray = ["goku","gohan", "roshi"]
miVariableArray.splice(0,2)
for(key of miVariableArray.keys()){
    console.log(key)
    miVariableArray.splice(key,1)
}
console.log(miVariableArray)

let button = document.querySelector("button")
let dataMascotas = []
dataMascotas= JSON.parse(localStorage.getItem("dataMAscotas").toString())
button.addEventListener("click",()=>{
    let nombreMascota = document.getElementById("nombreMascota").value;
    let edadMascota = document.getElementById("edadMascota").value;
    let duenoMascota = document.getElementById("duenoMascota").value;
    dataMascotas.push({nombre:nombreMascota, edad:edadMascota, duenoMascota})

    let data  = JSON.stringify(dataMascotas);
    localStorage.setItem("dataMAscotas",data)
})

