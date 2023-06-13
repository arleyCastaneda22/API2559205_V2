require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');
const estilistaServices = require('../services/estilistaServices');


const services =new estilistaServices();


const uri = process.env.URI;

const router = express.Router();


router.get('/', async (req,res)=>{
    const resultado = await services.find();

    if(resultado.length>0){
        res.status(200).send(resultado);
    }else{
        res.status(404).send('No encontró infromación');
    }
})


router.get('/:id', async (req, res)=>{
    const id = req.params.id;
        const resultado = await services.findOne(id);
        if(resultado){
            res.status(200).send(resultado);
        }else{
            res.status(404).send("No se encontro la información");
        }
})

//POST
router.post('/', async (req, res)=>{
    const body = req.body;
        const resultado = await services.insertOne(body);
        if(resultado){
            res.status(201).json({
                message: 'Se creo el estilista',
                resultado
            });
        }else{
            res.status(404).send("No se creó el estilista");
        }
})
//DELETE
router.delete('/:id', async (req, res)=>{
    const id = req.params.id;
        const resultado = await services.deleteOne(id);
        if(resultado){
            res.status(200).send(resultado);
        }else{
            res.status(404).send("No se encontro la información");
        }
})

//UpdateOne
router.patch('/:id', async (req, res)=>{
    const id = req.params.id;
    
    const nombre =req.body.nombre;
    const apellido =req.body.apellido;

        const resultado = await services.updateOne(id,nombre, apellido);
        if(resultado){
            res.status(201).json({
                message: 'Se actualizó el estilista',
                resultado
            });
        }else{
            res.status(404).send("No se actualizó el estilista");
        }
    
})

//updateMany
router.patch('/',async (req, res)=>{
    const estado=req.body.estado;
    const resultado = await services.actualizarMuchos(estado);
    if(resultado){
        res.status(201).json({
            message: 'Se actualizaron los estilistas',
            resultado
        });
    }else{
        res.status(404).send("No se actualizaron los estilistas");
    }
}
)

module.exports=router;
