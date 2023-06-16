const express = require('express');

const routerCitas=require('./routesCitas');
const routerServicios=require('./routesServicios');
const routerEstilistas=require('./routesEstilistas');

function routerApi(app){
    const router=express.Router();
    
    app.use('/beautysoft/v1', router);
    router.use('/citasJhon', routerCitas),
    router.use('/serviciosJhon',routerServicios);
    router.use('/estilistaJhon',routerEstilistas);
       
}

module.exports =routerApi;
