const routerCitas=require('./routesCitas');
const routerServicios=require('./routesServicios');
const routerEstilistas=require('./routesEstilistas');

function routerApi(app){
    app.use('/citasJhon', routerCitas),
    app.use('/serviciosJhon',routerServicios);
    app.use('/estilistaJhon',routerEstilistas);
       
}

module.exports =routerApi;
