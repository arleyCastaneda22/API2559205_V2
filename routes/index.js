const routerComments=require('./routesComments');
const routerMovies=require('./routesMovies');
const routerTheaters=require('./routesTheaters');
const routerUsers=require('./routesUsers');

function routerApi(app){
    app.use('/movies', routerMovies);
    app.use('/Theaters',routerTheaters);
    app.use('/users',routerUsers);
       
}

module.exports =routerApi;
