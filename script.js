var botonEncriptar = document.querySelector(".btnEncriptar");
var botonDesencriptar = document.querySelector(".btnDesencriptar");
var botonCopiar = document.querySelector(".btnCopiar")
var muneco = document.querySelector(".contenedorMuneco");
var h3 = document.querySelector(".contenedor-h3");
var parrafo = document.querySelector(".contenedorParrafo");
var resultado = document.querySelector(".textoResultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarFrontMun();
    var area = recuperarTexto();
    resultado.textContent = encriptarTexto(area);

}

function desencriptar(){
    ocultarFrontMun();
    var area = recuperarTexto();
    resultado.textContent = desencriptarTexto(area);
}

function recuperarTexto(){
    var area = document.querySelector(".area");
    return area.value;
}

function ocultarFrontMun(){
    muneco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal ="";

    for(var i = 0; i < texto.length; i++){
        if (texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if (texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if (texto[i] == "i"){
            textoFinal = textoFinal + "imex"
        }
        else if (texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if (texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    
    }

    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal ="";

    for(var i = 0; i < texto.length; i++){
        if (texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if (texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if (texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if (texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = 1+3;
        }
        else if (texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    
    }

    return textoFinal;
}

botonCopiar.onclick = copiarTexto;

function copiarTexto(){
    
    navigator.clipboard.writeText(resultado.innerHTML);

}



