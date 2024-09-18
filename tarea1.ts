  // 1. Declare variables de diferentes tipos (number, string, boolean) y muestre su valor por
  //  consola.

let numero: number    = 25;
let texto: string     = "Diego Abdo";
let booleano: boolean = true;

console.log("Número:", numero);
console.log("Texto:", texto);
console.log("Booleano:", booleano);



  //  2. Realice operaciones aritméticas básicas (suma, resta, multiplicación, división, módulo)
  //  con números.
let a: number = 10;
let b: number = 5;

let suma1: number          = a + b;
let resta: number          = a - b;
let multiplicación: number = a * b;
let division: number       = a / b;
let modulo: number         = a % b;


console.log("Suma:", suma1);            
console.log("Resta:", resta);           
console.log("Multiplicación:", multiplicación);
console.log("División:", division);       
console.log("Módulo:", modulo);          


  //  3. Utilice condicionales (if, else if, else) para tomar decisiones basadas en diferentes
  //  condiciones.

let x: number = 15;

if (x > 20) {
    console.log("x es mayor que 20");
} 
else if (x > 10) 
    {
    console.log("x es mayor que 10 pero menor o igual a 20");
} 
else 
{
    console.log("x es menor o igual a 10");
}


  //  4. Utilice bucles (for, while) para repetir un bloque de código un número determinado de
  //  veces o mientras se cumpla una condición.

for (let i: number = 0; i < 10; i++) 
{
    console.log('contador: ', i);
}


let contador: number = 0;

while (contador < 10) {
    console.log("contador:", contador);
    contador++;
}


  //  5. Defina funciones que realicen tareas específicas, proceda a llamarlas con diferentes
  //  argumentos.

  function sumar(a: number, b: number): number
  { 
    return a + b;
  }

console.log('el resultado de la suma es: ', sumar(5,5));
console.log('el resultado de la suma es: ', sumar(25,14));


  //  6. Cree un array de números, recorra cada elemento y muestra su valor por consola.
  //  Luego, calcule la suma de todos los elementos.

  let numeros:number[] = [1, 2, 3, 4, 5];
  let suma: number = 0;
  

  for (let numero of numeros) {
      console.log("Número:", numero);
      suma += numero;
  }
  console.log("Suma de el array:", suma);
  

  //  7. Desarrolle el programa del cálculo de factorial de un número N, pero utilice recursividad para lograr esta tarea.

  function factorial(n) 
  {
    if (n === 0) 
    {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log("Factorial de 4:", factorial(4));
console.log("Factorial de 7:", factorial(7));


  //  8. Cree una clase que represente a una persona (con propiedades privadas como nombre, edad y ciudad). 
  // Establezca setters y getters como públicos y finalmente coloque la clase
  //  para exportar.

  export class Persona {
    private nombre: string;
    private edad: number;
    private ciudad: string;
    private dpi: string;

    constructor(nombre, edad, ciudad, dpi) {
        this.nombre = nombre;
        this.edad   = edad;
        this.ciudad = ciudad;
        this.dpi = dpi;
    }


    getNombre() {
        return this.nombre;
    }

    getEdad() {
        return this.edad;
    }

    getCiudad() {
        return this.ciudad;
    }
    getDPI() {
        return this.dpi;
    }


    // Setters
    setNombre(nombre) {
        this.nombre = nombre;
    }

    setEdad(edad) {
        this.edad = edad;
    }

    setCiudad(ciudad) {
        this.ciudad = ciudad;
    }
    setDPI(dpi) {
        this.dpi = dpi;
    }
}

//  10. Desarrolle un programa que muestre un ejemplo de split

let frase: string      = "P0025";
let palabras: string[] = frase.split("P");

console.log("Numeros:", palabras[0]);
