// router.get('/comments',async (req, res)=>{
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();
//         const movies = await client.db("sample_mflix").collection("comments").find({}).limit(10).toArray();
//         if(movies){
//             res.send(movies);
//         }else{
//             res.send("No se encontro la informacion");
//         }
//     }catch(e){
//         console.log(e);
//     }finally{
//         await client.close();
//     }
// })