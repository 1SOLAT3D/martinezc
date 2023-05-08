
window.onload = function() {
    document.getElementById("btnMenu").addEventListener("click", function(){
        document.getElementById("miMenu").classList.toggle("MenuEscondido");
        document.getElementById("miContenido").classList.toggle("contenidoMenuEscondido");
    });
}