

export interface IResInscripcion{
    inscripciones: Inscripcion[];
}

export interface Inscripcion{
descripcion:string;
_id?:string;
id_curso: string;
id_aspirante: string;
fechaInscripcion: string;
hora_semanal: string;
valorCancelado: string
}