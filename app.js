// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array que almacena los nombres de los amigos
let amigos = [];
 // Función para agregar un amigo
function agregarAmigo() {
    // Capturar el valor del campo de texto
    let nombreAmigo = document.getElementById('amigo').value.trim();
    console.log(nombreAmigo);
    // validar si el campo esta vacío
    if (nombreAmigo === ''){
        alert("Error ingrese un nombre: ");
        return;
    } else {
        // Actualizar el array de amigos: 
        amigos.push(nombreAmigo); 
        //limpiar el campo de entrada
        document.getElementById('amigo').value = "";
        console.log(amigos);
        mostrarListaAmigos();
    }
}
function mostrarListaAmigos(){
    // Obtener el elemento <ul>
    const listaAmigos = document.getElementById('listaAmigos');
    // Limpiar la lista antes de actualizarla
    listaAmigos.innerHTML = "";
    // Recorrer el array y agregar cada nombre a la lista
    amigos.forEach(function(friend){
        //Crear un nuevo <li> para cada amigo
        const li = document.createElement('li');
        // Establecer el texto del <li> como el nombre del amigo
        li.textContent = friend;
        // Agregar el <li> a la lista <ul>
        listaAmigos.appendChild(li);
    });
} 
function sortearAmigo() {
    if (amigos.length === 0){
        alert('El array esta vacío');
        return;               
    } else{
        let indiceAleatorio = Math.floor(Math.random()*amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        document.getElementById('resultado').innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
        }
    }
}