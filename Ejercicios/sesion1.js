// Variables

// ============== Let ==============
let edadUsuario = 25;
// console.log("Let", edadUsuario)
edadUsuario = 26;
// console.log("Let", edadUsuario)
// Const
const nombreUsuario = "Maria";
// console.log("Nombre: ", nombreUsuario)

// ============== Condicionales ==============
const edadMinima = 18;
// const usuario = {'nombre': 'Maria', 'edad': 17}

// if (usuario.nombre === 'Maria') {
//     // console.log('Puedes entrar a la discoteca! :)')
// }

// const numero = 2.0;
const numeroStr = "version" + "2.0";
// console.log(numero === numeroStr)

const bandera = true;
const pais = "Colombia";
const comida = "Bandeja";

// ============== Operador ternario ==============
// bandera && pais === 'Colombia' ? console.log('Viva Colombia') : console.log('Ya no viva Colombia')
let name = null;
const usuario = name && "Defecto";
// console.log(usuario)

// ============== For ==============

let totalPares = 0;
let totalImpares = 0;

const inicio = 1;
const fin = 200;

for (let i = inicio; i <= fin; i++) {
    if (i % 2 === 0) {
        totalPares++;
        // console.log(`El numero ${i} es par`)
    } else {
        totalImpares++;
        // console.log(`El numero ${i} es impar`)
    }
}

// console.log(`Total numeros pares: ${totalPares}`)
// console.log(`Total numeros impares: ${totalImpares}`)

// ============== While ==============

const limite = 100;

let suma = 0;
let numero = 1;

while (suma < limite) {
    suma += numero
    // console.log(`Numero ${numero}, suma acumulada: ${suma}`)
    numero++
}

// console.log(`La suma supero el limite de ${limite}`)
// console.log(`El ultimo numero sumado fue: ${numero - 1}`)

// ============== Functions ==============
const calcularAreaCirculo = (radio) => {
    const area = Math.PI * Math.pow(radio, 2)
    return area
}

const radio = 5
const respuesta = calcularAreaCirculo(radio)
// console.log(respuesta)

const sumaNumeros = (a, b) => {
    const suma = a + b
    return suma
}

const respuestaSuma = sumaNumeros(5, 5)
// console.log(respuestaSuma)

// ============== Arrays ==============

let tareas = ["Lavar la ropa", "Hacer la compra", "Estudiar JavaScript"];
console.log('1.',tareas)
tareas.push("Llamar a mi mamá")
console.log('2.',tareas)
tareas.shift()
console.log('3.',tareas)

const indice = tareas.indexOf("Hacer la compra")
if (indice !== -1) {
    tareas.splice(indice, 1)
}
console.log('4.',tareas)

tareas.map((tarea) => {
    console.log(tarea)
})