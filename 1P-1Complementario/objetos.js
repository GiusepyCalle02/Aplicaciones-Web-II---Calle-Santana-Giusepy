const curso = [
    {
        id:1,
        descripcion: "Base de Datos",
        fechaDeInicio: "29 de septiembre"
    },
    {
        id:2,
        descripcion: "Interfaces Humano computador",
        fechaDeInicio: "29 de septiembre"
    },
    {
        id:3,
        descripcion: "Programación Orientada a Objetos",
        fechaDeInicio: "29 de septiembre"
    },
    {
        id:4,
        descripcion: "Ecuaciones Diferenciales",
        fechaDeInicio: "29 de septiembre"
    },
    {
        id:5,
        descripcion: "Aplicación de Sistemas Operativos",
        fechaDeInicio: "29 de septiembre"
    }

]

const aspirante = [
    {
        id:11,
        nombre: "Alexander",
        identificacion: "1315"
    },
    {
        id:22,
        nombre: "Leonela",
        identificacion: "1316"
    },
    {
        id:33,
        nombre: "Fernando",
        identificacion: "1317"
    },
    {
        id:44,
        nombre: "Ana",
        identificacion: "1318"
    },
    {
        id:55,
        nombre: "Erick",
        identificacion: "1319"
    }
]

const inscripcion = [
    {
        id:111,
        idCurso:1,
        idAspirante: 11,
        fecha:"20 de septiembre",
        hora:2,
        valorCancelado:20
    },
    {
        id:222,
        idCurso:2,
        idAspirante: 22,
        fecha:"20 de septiembre",
        hora:1,
        valorCancelado:10
    },
    {
        id:333,
        idCurso:3,
        idAspirante: 33,
        fecha:"20 de septiembre",
        hora:2,
        valorCancelado:28
    },
    {
        id:444,
        idCurso:4,
        idAspirante: 44,
        fecha:"20 de septiembre",
        hora:3,
        valorCancelado:35
    },
    {
        id:555,
        idCurso:5,
        idAspirante: 55,
        fecha:"20 de septiembre",
        hora:1,
        valorCancelado:15
    },
]

/*
for(let elemento of comidas)
    {
      if (elemento.codigo===boton.id)
      {
        codigo.value = elemento.codigo;
        descripcion.value = elemento.descripcion;
        tipo.value = elemento.tipo;

      }
    }
*/

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