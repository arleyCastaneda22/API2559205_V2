require('dotenv').config();
const express = require('express');
const { MongoClient, ObjectId} = require('mongodb'); //ObjectId: Para poder trabajar con id



const uri = process.env.URI;

const router = express.Router();

class citasServices{
    constructor(){}
//------------------find------//
async find(){
  const cliente = new MongoClient(uri);
  try {
    await cliente.connect();
    const resultado = await cliente.db('Beautysoft').collection('citasJhon').find({}).limit(10).toArray();
    return resultado;
    
  } catch (error) {
    console.log(error);
  }finally{
    await cliente.close()
  }
}


//2. findOne()
async findOne(id){
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const resultado =  await client.db('Beautysoft').collection('citasJhon').findOne({_id: new ObjectId(id)});
        return resultado;
    } catch (e) {
        console.log(e);
    }finally{
        await client.close();
    }
}

//InsertOne
async insertOne(body){
    const cliente =new MongoClient(uri);
    try {
        await cliente.connect()
        const resultado= await cliente.db('Beautysoft').collection('citasJhon').insertOne(body);
        return resultado;
    } catch (error) {
        console.log(error);
    }finally{
        await cliente.close()
    }
}

//DeletOne
async deleteOne(id){
  const client = new MongoClient(uri);
  try {
      await client.connect();
      const resultado =  await client.db('Beautysoft').collection('citasJhon').deleteOne({_id: new ObjectId(id)});
      return resultado;
  } catch (e) {
      console.log(e);
  }finally{
      await client.close();
  }
}

//UPDATEONE

async updateOne(id,nombre,apellido){
  const client = new MongoClient(uri);
  try {
      await client.connect();
      const resultado =  await client.db('Beautysoft').collection('citasJhon')
      .updateOne({_id: new ObjectId(id)},
      {
        $set:{
            nombre:nombre,
            apellido:apellido
        }});
      return resultado;
  } catch (e) {
      console.log(e);
  }finally{
      await client.close();
  }
}
//UPDATEMANY
async actualizarMuchos(estado){
   const cliente = new MongoClient(uri);
   try {
     await cliente.connect();
     const resultado = await cliente.db('Beautysoft').collection('citasJhon').updateMany({},
      {
        $set:{estado:estado}
      })
      
 
    return resultado;

   } catch (error) {
    console.log(error);
   }finally{
     await cliente.close()
   }
 }
}

module.exports=citasServices;