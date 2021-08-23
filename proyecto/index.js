const leerMas = document.querySelector(".leer-mas");
let txt=""
leerMas.addEventListener("click",(e)=>{
    const bloqueDesplegable = document.getElementById("bloque-desplegable");
    txt = e.target.innerHTML;
    if(txt = "Read more..."){
        bloqueDesplegable.style.display ="block";
        e.target.innerHTML = "Read less"
    }else{
        bloqueDesplegable.style.display ="none";
        e.target.innerHTML = "Read more..."
    }
    
    // const bloqueDesplegable = document.querySelector("#bloque-desplegable");
    // bloqueDesplegable.style.display ="block";
    // if (btnDesplegar)
    // const btnDesplegar = document.querySelector(".btnDesplegar");
    // e.innerHTML = "Read less"
})

// $('.leer-mas').click(function(){
// 	var $this = $(this);
// 	$this.toggleClass('leer-mas');
// 	if($this.hasClass('leer-mas')){
// 		$this.text('LEER MÁS');
// 	} else {
// 		$this.text('LEER MENOS');
// 	}
// });