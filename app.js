// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    console.log(nombreAmigo);
    if (nombreAmigo === ''){
        alert("Error ingrese un nombre: ");
        return;
    } else {
        amigos.push(nombreAmigo);
        document.getElementById('nombreAmigo').value = "";
    }
} 
function sorteoAleatorio() {

}