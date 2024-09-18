
import {Persona} from './tarea1.ts'; 

let persona = new Persona("Diego", 21, "Quetzaltenango", "3612835390101");

console.log("Nombre:", persona.getNombre());
console.log("Edad:", persona.getEdad());
console.log("Ciudad:", persona.getCiudad());
console.log("DPI:", persona.getDPI());

persona.setNombre("Jose");
persona.setEdad(23);
persona.setCiudad("Guatemala");
persona.setDPI("356821720920901");

console.log("Nuevo Nombre:", persona.getNombre());
console.log("Nueva Edad:", persona.getEdad());
console.log("Nueva Ciudad:", persona.getCiudad());
console.log("Nuevo DPI:", persona.getDPI());
