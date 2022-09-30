import {curso, aspirante, inscripcion} from './objetos.js';


for (let i of curso) {
    console.log(i);
   }
   
   
   for (var x in aspirante){
       //console.log(`${x}: ${aspirante[x]}`);
       console.log(aspirante[x]);
   }
   
   var z = 0;
   while (z < 5) {
    console.log(inscripcion[z]);
    z++;
   }