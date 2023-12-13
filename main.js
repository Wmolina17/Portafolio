// Función para expandir la línea de tiempo
function verMas(idCont, idMas, idMenos) {
    var lineaDeTiempo = document.getElementById(idCont);
    var btnMas = document.getElementById(idMas)
    var btnMenos = document.getElementById(idMenos)
    
    lineaDeTiempo.style.height = "auto"; 
    btnMas.style.display = "none"
    btnMenos.style.display = "block"
}

// Función para contraer la línea de tiempo
function verMenos(idCont, idMas, idMenos) {
    var lineaDeTiempo = document.getElementById(idCont);
    var btnMas = document.getElementById(idMas)
    var btnMenos = document.getElementById(idMenos)
    
    lineaDeTiempo.style.height = "1150px";
    btnMas.style.display = "block"
    btnMenos.style.display = "none"
}



// funcion para mostrar certificado

var contImgC = document.getElementsByClassName("cont-img-certificado")[0]
var contNombreC = document.getElementsByClassName("cont-nombre-certificado")[0]


function verCertificado(elemento){
    var contenedorCertificado = document.getElementsByClassName("cont-vista-certificado")[0]
    contenedorCertificado.classList.add("left-certificado-0")

    const bgBlack = document.getElementsByClassName("bg-black")[0]
    bgBlack.classList.add("bg-black-vista")

    var imgCard = elemento.querySelector("img"); // Corregido aquí
    var nameCard = elemento.querySelector("h2"); // Corregido aquí

    contImgC.src = imgCard.src
    contNombreC.innerText = nameCard.innerText
}

function cerrarCertificado(){
    var contenedorCertificado = document.getElementsByClassName("cont-vista-certificado")[0]
    contenedorCertificado.classList.remove("left-certificado-0")

    const bgBlack = document.getElementsByClassName("bg-black")[0]
    bgBlack.classList.remove("bg-black-vista")
}

