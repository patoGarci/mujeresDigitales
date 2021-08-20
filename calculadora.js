Calculadora()
function Calculadora(){
    let muestraDigitados = "";
    const numeros = document.querySelector("#numeros");
    let btnCalculadora = document.querySelectorAll(".btnCalculadora");
    btnCalculadora.forEach(element => {
        element.addEventListener("click",()=>{
            add(element.innerHTML);
        })
    });
    let data = [];
    function add(num){
        muestraDigitados = muestraDigitados + num;
        numeros.value = muestraDigitados;
        data.push = muestraDigitados;
    }
    const btnIgual = document.querySelector(".btnIgual");
    btnIgual.addEventListener("click",()=>{
        console.log(data)
    })
}