function mostrarmodal(){
    document.getElementById("myModal").classList.remove("modal") 
}

document.getElementById("legal").onclick = function(){
    mostrarmodal();
}

function quitarmodal() {
    document.getElementById("myModal").classList.add("modal")
}

document.getElementById("cerrar-modal").onclick = function(){
    quitarmodal();
}