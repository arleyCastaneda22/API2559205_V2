const { MongoClient, ObjectId } = require('mongodb'); //ObjectId: Para poder trabajar con id
const uri = "mongodb+srv://admin:admin@cluster0.4tm3xjj.mongodb.net/?retryWrites=true&w=majority";

class movieService{

    constructor(){}
    //Create
    //Read
    async find(){
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const result = await client.db("sample_mflix").collection("movies").find({}).limit(10).toArray();
            return result;
        } catch (error) {
            console.log(error);
        }finally{
            await client.close();
        }
    }
    //updateOne
    async updateOne(id, title, year){
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const result = await client.db("sample_mflix").collection("movies").updateOne({_id: new ObjectId(id)},
            {$set:{title:body, year:body.year}});
            return result;
        }catch(e){
            console.log(e);
        }finally{
            await client.close();
        }
    }
    //delete
}

module.exports = movieService;