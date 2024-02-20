/*
// 1. Le pregunto al usuario cómo se llama
const nombre = prompt("Hola, ¿cómo te llamas?")

// 2. Creo un nuevo string con el saludo
const saludo = "Hola, " + nombre + ", gusto conocerte"

// 3. Le mostramos el saludo al usuario
alert(saludo)
*/

// 1. Preguntarle al usuario por un número
let usuario = prompt("Ingrese un número")

// 1.5 transformar este string a número
usuario = parseInt(usuario)

// 2. Sumarle 1
const programa = usuario + 1

// 3. Creamos la frase ganadora
const frase = "Yo gané con el " + programa

// 4. Le avisamos al usuario que perdió
alert(frase)