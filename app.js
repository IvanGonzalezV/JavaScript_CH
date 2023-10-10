console.log("Curso de JS")

// PROYECTO: 1 - Clasificacion de Persona de acuerdo a la edad

let continuar = true;

function calcularAnioNacimiento(edad) {
    const anioActual = new Date().getFullYear();
    return anioActual - edad;
}

while (continuar) {
  let edad = parseInt(prompt("Ingrese su edad:"));

  if (isNaN(edad)) {
    alert("Por Favor, Ingrese una Edad Valida.");
    continue;
  }

  if (edad < 18) {
    alert("Eres un niño o un adolescente.");
  } else if (edad >= 18 && edad < 65) {
    alert("Eres un adulto.");
  } else {
    alert("Eres una persona mayor.");
  }

  const anioNacimiento = calcularAnioNacimiento(edad);
  alert("Año de Nacimiento Aproximado: " + anioNacimiento);

  const respuesta = prompt("Desea continuar? Ingrese 'esc' para salir, o cualquier otra tecla para continuar.");

  if (respuesta !== null && respuesta.toLowerCase() === 'esc') {
    continuar = false; 
  }
}



// PROYECTO: 2 - Tabla de Multiplicar opciones de rango y tabla

// let numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));
// let limiteSuperior = parseInt(prompt("Ingrese el limite superior del rango:"));

// for (let i = 1; i <= limiteSuperior; i++) {
//   let resultado = numero * i;
//   console.log(`${numero} x ${i} = ${resultado}`);
//   /* alert(`${numero} x ${i} = ${resultado}`); */
// }




// PROYECTO: 3 - Aplicacion de IVA

/* const iva = 1.16
let monto1 = parseInt(prompt("Ingrese el primer monto"))
let monto2 = parseInt(prompt("Ingrese el siguiente monto"))
let monto3 = parseInt(prompt("Ingrese el siguiente monto"))
let monto4 = parseInt(prompt("Ingrese el siguiente monto"))
let monto5 = parseInt(prompt("Ingrese el siguiente monto"))
const totalSinIva = monto1 + monto2 + monto3 + monto4 + monto5
const totalConIva = Math.round(totalSinIva * iva)

alert("Monto sin IVA: " + "$" + totalSinIva + "\nMonto con IVA: " + "$" + totalConIva) */