import './style.css'
import axios from "axios";
import {IResInscripcion, Inscripcion} from "./interfaces/IInscripcion";


const httpAxios=axios.create({
  baseURL:"http://localhost:5000/api/"
})

const app=document.querySelector<HTMLDivElement>('#app')!
 

app.innerHTML+=`
<div class="contenedor">
<label for="id">Id inscripcion</label>  <input id="id" />
<label for="descripcion">Descripcion de la Inscripcion </label>  <input id="descripcion" />
<label for="idCurso">Id curso</label>  <input id="idCurso" />
<label for="idAspirante"> Id aspirante</label> <input id="idAspirante">

<label for="fechaInscripcion">Fecha Inscripcion</label> <input id="fechaInscripcion"/>

<label for="horaSemanal">Hora semanal</label> <input id="horaSemanal"/>
<label for="valorCancelado">Valor Cancelado </label> <input id="valorCancelado"/>


<button id="nuevo">Nuevo</button>
<button id="grabar">Grabar</button>
<button id="consultar">Consultar</button>
</div>
<div id="cuerpo"/>
`
const nuevo=document.querySelector<HTMLButtonElement>("#nuevo")!
const grabar=document.querySelector<HTMLButtonElement>("#grabar")!
const consultar = document.querySelector<HTMLButtonElement>('#consultar')!

const descripcion=document.querySelector<HTMLInputElement>("#descripcion")!
const id=document.querySelector<HTMLInputElement>("#id")!
const idCurso=document.querySelector<HTMLInputElement>("#idCurso")!
const idAspirante=document.querySelector<HTMLInputElement>("#idAspirante")!
//const fecha=document.querySelector<HTMLInputElement>("#fecha")!
const fechaInscripcion=document.querySelector<HTMLInputElement>("#fechaInscripcion")!
const horaSemanal=document.querySelector<HTMLInputElement>("#horaSemanal")!
const valorCancelado=document.querySelector<HTMLInputElement>("#valorCancelado")!
const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo')!
nuevo.addEventListener("click", ()=>{
  descripcion.value=""
  id.value=""
 // idCurso.value=""
  idAspirante.value=""
 // fecha.value=""
 fechaInscripcion.value=""
 horaSemanal.value=""
 valorCancelado.value=""
})


consultar.addEventListener("click", async()=>{
  const respInscripciones:IResInscripcion=await (await httpAxios.get<IResInscripcion>("inscripcion")).data
  const tabla = document.createElement("table")
  tabla.id="tabla"
  tabla.border="1"

  const {inscripciones}=respInscripciones;
  console.log(respInscripciones)

  for (const inscripcion of inscripciones)
    {
      const row = tabla.insertRow()
      const celda =  row.insertCell()
      celda.innerHTML=` <button class="boton" value="${inscripcion._id}">${inscripcion.descripcion}</button>`
      const celda2= row.insertCell()
      celda2.innerHTML=`${inscripcion._id}`
    }
    cuerpo.innerHTML=``
    cuerpo.appendChild(tabla)


    document.querySelectorAll(".boton").forEach((ele:Element)=>{
      ele.addEventListener("click", async()=>{
        const idx=(ele as HTMLButtonElement).value;
        const inscripcion:Inscripcion=await (await httpAxios.get<Inscripcion>(`inscripcion/${idx}`)).data
        descripcion.value=inscripcion.descripcion.toString()
        idCurso.value=inscripcion.id_curso.toString()
        idAspirante.value=inscripcion.id_aspirante.toString()
       // fecha.value=aprendizaje.fecha!.toString()
        fechaInscripcion.value=inscripcion.fechaInscripcion.toString()
        horaSemanal.value=inscripcion.hora_semanal.toString()
        valorCancelado.value=inscripcion.valorCancelado.toString()
        id.value=inscripcion._id!.toString()
      })
    })
  })

    grabar.addEventListener('click',async ()=>{
      const data:Inscripcion= {
        descripcion:descripcion.value.toString(),
        id_curso:idCurso.value.toString(),
        id_aspirante: idAspirante.value.toString(),
        fechaInscripcion:fechaInscripcion.value.toString(),
        hora_semanal:horaSemanal.value.toString(),
        valorCancelado:valorCancelado.value.toString()
    
      }
  console.log(data)
    
      if (id.value.trim().length>0 )
      {
        //        
        const resp: Inscripcion = await (await httpAxios.put<Inscripcion>(`inscripcion/${id.value}`, data)).data
       
        
        console.log(`La inscripción fue modificada con éxito`);
        
        return;
      }
      try {
        const resp: Inscripcion =  await (await httpAxios.post<Inscripcion>(`inscripcion`, data)).data
       
        console.log(`La inscripción ${resp.descripcion} fue grabado con éxito`);
      } catch (error) {
        if ( axios.isAxiosError(error)  )
        {
          console.log(error );
          
        }
        
      }
    



    })

