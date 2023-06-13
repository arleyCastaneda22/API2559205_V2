require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser');
const routerApi =require('./routes')

const app = express();

//Middlewares
app.use(bodyparser.json()); //para poder trabajar con json
app.use(bodyparser.urlencoded({ extended: true })); //para poder trabajar con formularios codificados en url
app.use(express.json()); //para poder trabajar con json
const router= express.Router();

const PORT = process.env.PORT || 4000;
routerApi(app);

app.get('/',(req, res)=>{
    res.status(200).send('API de BeautiSoft');
})



app.listen(PORT, ()=>{
    console.log(`El servidor esta escuchando en http://localhost:${PORT}`);
})

module.exports=router;