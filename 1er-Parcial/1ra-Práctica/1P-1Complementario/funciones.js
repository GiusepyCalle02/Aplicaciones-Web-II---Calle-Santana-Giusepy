//A continuación importamos los 3 arreglos que se encuentran
//en el archivo objetos.js lo que nos permitirá atraer sus datos
//y poderlos utilizar en los ciclos para que se muestren en consola
import {curso, aspirante, inscripcion} from './objetos.js';



//Aquí utilizamos el ciclo for of para mostrar los atributos de la entidad curso.
for (let i of curso) {
    console.log(i);
}
   

//Aquí utilizamos el ciclo for in para mostrar los atributos de la entidad aspirante.
for (var x in aspirante){
    //console.log(`${x}: ${aspirante[x]}`);
    console.log(aspirante[x]);
}


//Aquí utilizamos el ciclo while para mostrar los atributos de la entidad inscripcion.
var z = 0;
while (z < 5) {
    console.log(inscripcion[z]);
    z++;
}