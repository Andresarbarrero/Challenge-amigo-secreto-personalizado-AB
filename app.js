// CÓDIGO ORGANIZADO CON NUEVO BOTÓN DE REINICIAR Y ALGUNAS FUNCIONALIDADES DIFERENTES 
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declaración de variables globales  
let amigos = [];  
let nombre = '';  

// Obtención de referencias a los botones desde el DOM  
const botonAñadir = document.querySelector('button[onclick="agregarAmigo()"]');  
const botonSortear = document.querySelector('button[onclick="sortearAmigo()"]');  
const botonReiniciar = document.getElementById('botonReiniciar'); // Botón de reinicio  

// Función para agregar un amigo a la lista  
function agregarAmigo() {  
    const nombre = document.getElementById('amigo').value;  
    
    // Validación de entrada  
    if (nombre === '') {  
        alert('Por favor añade un nombre');  
    } else if (amigos.includes(nombre)) {  
        alert('Este amigo ya ha sido añadido');  
        return;  
    } else {  
        amigos.push(nombre);  
    }  
    
    // Limpiar la caja de texto y actualizar la lista de amigos  
    limpiarCaja();  
    listaActualizada(amigos);  
    
    // Habilitar el botón de sortear si hay al menos un amigo en la lista  
    if (amigos.length > 0) {  
        botonSortear.disabled = false;  
    }  
}  

// Función para limpiar la caja de texto de entrada  
function limpiarCaja() {  
    document.querySelector('#amigo').value = '';  
}  

// Función para actualizar la lista de amigos en el HTML  
function listaActualizada(amigos) {  
    const listaHTML = document.getElementById('listaAmigos');  
    listaHTML.innerHTML = '';  
    
    // Iterar sobre el array de amigos y agregar cada uno como un elemento de lista  
    amigos.forEach(amigo => {  
        const li = document.createElement('li');  
        li.textContent = amigo;  
        listaHTML.appendChild(li);  
    });  
}  

// Función para sortear un amigo aleatoriamente  
function sortearAmigo() {  
    // Verificar que haya amigos para seleccionar  
    if (amigos.length === 0) {  
        alert('No hay amigos disponibles para seleccionar. Escribe un nombre en la caja de texto y presiona el botón "AÑADIR AMIGO"');  
        return;  
    }  
    
    // Limpiar la lista de amigos en el HTML  
    const listaHTML = document.getElementById('listaAmigos');  
    listaHTML.innerHTML = '';  
    
    // Generar un índice aleatorio para seleccionar un amigo  
    const indice = Math.floor(Math.random() * amigos.length);  
    const amigoSeleccionado = amigos[indice];  
    
    // Mostrar el resultado del sorteo  
    const resultadoSorteo = document.getElementById('resultado');  
    if (resultadoSorteo) {  
        resultadoSorteo.innerHTML = `¡TU AMIGO SECRETO SELECCIONADO ES: ${amigoSeleccionado}!`;  
    }  
    
    // Deshabilitar los botones de agregar y sortear, habilitar el de reiniciar  
    botonAñadir.disabled = true;  
    botonSortear.disabled = true;  
    botonReiniciar.disabled = false;  
}  

// Función para reiniciar el sorteo  
function reiniciarSorteo() {  
    // Limpiar la lista de amigos y actualizar la interfaz  
    amigos = [];  
    listaActualizada(amigos);  
    
    // Limpiar el resultado del sorteo anterior  
    const resultadoSorteo = document.getElementById('resultado');  
    if (resultadoSorteo) {  
        resultadoSorteo.innerHTML = '';  
    }  
    
    // Habilitar el botón de agregar, deshabilitar los de sortear y reiniciar  
    botonAñadir.disabled = false;  
    botonSortear.disabled = true;  
    botonReiniciar.disabled = true;  
}