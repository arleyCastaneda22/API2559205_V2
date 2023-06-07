const express = require('express');
const { MongoClient, ObjectId, ClientSession } = require('mongodb'); //ObjectId: Para poder trabajar con id
const bodyparser = require('body-parser');

const uri = "mongodb+srv://admin:admin@cluster0.4tm3xjj.mongodb.net/?retryWrites=true&w=majority";

const app = express();

//Middlewares
app.use(bodyparser.json()); //para poder trabajar con json
app.use(bodyparser.urlencoded({ extended: true })); //para poder trabajar con formularios codificados en url
app.use(express.json()); //para poder trabajar con json
const router= express.Router();

router.get('/',async (req, res)=>{
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const teatro = await client.db("sample_mflix").collection("theathers").find({}).limit(10).toArray();
        if(teatro){
            res.send(movies);
        }else{
            res.send("No se encontro la informacion");
        }
    }catch(e){
        console.log(e);
    }finally{
        await client.close();
    }
})
module.exports=router;