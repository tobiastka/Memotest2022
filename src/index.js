function configurarPartida(){

    const $cuadros = document.querySelectorAll(".cuadro-juego");
    let posiblesColores = ["rojo","azul","gris","amarillo","verde","naranja","violeta","marron","rojo","azul","gris","amarillo","verde","naranja","violeta","marron"];
    let cuadrosPintados = 0;

    while(cuadrosPintados != 16){
        let numeroColorRandom = Math.floor(Math.random()*posiblesColores.length);
        if (posiblesColores[numeroColorRandom]){

            $cuadros[cuadrosPintados].classList.add(posiblesColores[numeroColorRandom]);
            posiblesColores[numeroColorRandom] = ""
            cuadrosPintados ++

        }
    }

}
function resaltarCuadro(cuadro,optional = false){
    cuadro.style.opacity = 1
    if(optional){
        setTimeout(() => {
            cuadro.style.opacity = 0
        }, 1000);
    }
   
}
function clickearCuadrado(evento){
    const $cuadroClickeado = evento.target;

    if (parSeleccionado.length === 0){
        parSeleccionado.push($cuadroClickeado);
        resaltarCuadro(parSeleccionado[0]);
        return ""
    }


    if(parSeleccionado.length === 1){
        parSeleccionado.push($cuadroClickeado);
        turnos++;
        if(String(parSeleccionado[0].classList) == String(parSeleccionado[1].classList)){
            resaltarCuadro(parSeleccionado[1]);

            parSeleccionado.forEach(function(element){
                element.onclick = function(){

                }
            });
            paresEncontrados++;
            if(paresEncontrados == 8){
                $numeroTurno = document.querySelector("#numero-turnos");
                $numeroTurno.innerText = turnos;

                $displayJuego = document.querySelector("#display-juego");
                $displayJuego.style.display = "none";

                $displayResultado = document.querySelector("#display-resultado");
                $displayResultado.style.display = "block";
            }
            parSeleccionado = []
            return
        }else{
            resaltarCuadro(parSeleccionado[1],true);
            resaltarCuadro(parSeleccionado[0],true);
            parSeleccionado = [];
            return ""

        }

    }
    
    
}

let parSeleccionado = [];
let paresEncontrados = 0; // Maximo valor deberia ser 8
let turnos = 0;
$todosLosCuadros = document.querySelectorAll(".cuadro-juego");

$todosLosCuadros.forEach(function(element){

    element.onclick = clickearCuadrado;

});


configurarPartida();