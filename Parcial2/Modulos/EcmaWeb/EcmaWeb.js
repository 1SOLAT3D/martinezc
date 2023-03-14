import * as area from "./area.js"

window.onload = function(){

document.getElementById("boton").addEventListener("click", function(e){


    let vbase = document.getElementById('base').value;

    let valt = document.getElementById('altura').value;


    let varea = area.areaTriangulo(vbase, valt);

    document.getElementById("area").innerText=varea;

    e.preventDefault();

})
}