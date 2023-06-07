const express = require('express');
const { MongoClient, ObjectId, ClientSession } = require('mongodb'); //ObjectId: Para poder trabajar con id
const bodyparser = require('body-parser');

const moviesServices =require('../services/moviesServices');
require('dotenv').config();
const uri = "mongodb+srv://admin:admin@cluster0.4tm3xjj.mongodb.net/?retryWrites=true&w=majority";
const service=new moviesServices();
const app = express();

//Middlewares
app.use(bodyparser.json()); //para poder trabajar con json
app.use(bodyparser.urlencoded({ extended: true })); //para poder trabajar con formularios codificados en url
app.use(express.json()); //para poder trabajar con json
const router= express.Router();


router.get('/', async (req, res)=>{
        const result = await service.find();
        if(result.length>0){
            res.status(200).send(result);

        }else{
            res.status(404).send('Not Found');
        }
})

//2.1 findOne()
// router.get('/:id', async (req, res)=>{
//     const id = req.params.id;
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();
//         const movie = await client.db("sample_mflix").collection("movies").findOne({_id: new ObjectId(id)});
//         if(movie){
//             res.status(200).send(movie);
//         }else{
//             res.status(404).send("No se encontro la pelicula");
//         }
//     }catch(e){
//         console.log(e);
//     }finally{
//         await client.close();
//     }
// })

//1. CREATE
//1.1 insertOne()
// router.post('/', async (req, res)=>{
//     const body = req.body;
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();
//         const result = await client.db("sample_mflix").collection("movies").insertOne(body);
//         if(result){
//             res.json({
//                 message: 'Se creo la pelicula en la Base de Datos',
//                 result,
//                 //data: body
//             });
//         }else{
//             res.send("No se creo la pelicula");
//         }
//     }catch(e){
//         console.log(e);
//     }finally{
//         await client.close();
//     }
// })

//1.2 insertMany()
// router.post('/', async (req, res)=>{
//     const body = req.body;
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();
//         const result = await client.db("sample_mflix").collection("movies").insertMany(body);
//         if(result){
//             res.status(201).json({
//                 message: 'Se crearon las pelicula en la Base de Datos',
//                 result,
//                 //data: body
//             });
//         }else{
//             res.status(400).send("No se creo la pelicula");
//         }
//     }catch(e){
//         console.log(e);
//     }finally{
//         await client.close();
//     }
// })

//3. UPDATE
// updateOne() Actualizamos solo un campo

// router.patch('/:id', async (req, res)=>{
//     const id = req.params.id;
//     const movie_title = req.body.title;
//     const movie_year=req.body.year;
//     const result= await service.updateOne(id, movie_title, movie_year);
//         if(result){
//             res.status(201).json({
//                 message: 'Se actualizo la pelicula',
                
//             });
//         }else{
//             res.status(404).send("No se actualizo la pelicula");
//         }
// })

// DELETE
// deleteOne() Actualizamos solo un documento
// router.delete('/:id', async (req, res)=>{
//     const id = req.params.id;
//     const body = req.body;
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();
//         const result = await client.db("sample_mflix").collection("movies").deleteOne({_id: new ObjectId(id)});
//         if(result){
//             res.status(201).json({
//                 message: 'Se borro la pelicula',
//                 result,
//                 //data: body
//             });
//         }else{
//             res.status(400).send("No se actualizo la pelicula");
//         }
//     }catch(e){
//         console.log(e);
//     }finally{
//         await client.close();
//     }
// })
module.exports=router;
