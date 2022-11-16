const { response } = require('express');
const { inscripcion } = require('../models');



    const [ sum, inscripcions ] = await Promise.all([
        inscripcion.countDocuments(query),
        inscripcion.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);
  
    res.json({
      sum, 
      inscripcions
    })



const createInscripcion = async(req,res=response)=>{
    const { status, ...body } =  req.body;
    
    const existInscripcion =  await inscripcion.findOne({name: body.name})

    if (existInscripcion)
    {
        return res.status(400).json({
            msg:`La inscripcion ${ existeInscripcion.name } ya existe`
        })
    }

    const data = {
        ...body,
        name: body.name
    }

    const inscripcion = new Inscripcion(data);

    const newInscripcion =  await inscripcion.save();
    res.status(201).json(newInscripcion);
}

 module.exports ={
    createInscripcion,

 }