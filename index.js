// recommitted to gitignore files

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString = "postgres://MikeB@localhost/massiveproject";
var controller = require('./productsCtrl')

var massiveInstance = massive.connectSync({connectionString : connectionString});

var app = module.exports = express();

app.use(bodyParser.json());

app.set('db', massiveInstance);

var db = app.get('db');
controller.setDb(db);

app.listen(3000, function(){
  console.log('noyepyepyepw listening on port 3000');
})

app.post('/api/products', controller.create);
app.get('/api/products/:productId', controller.getOne);
app.get('/api/products', controller.getAll);
app.put('/api/products/:productId', controller.update);
app.delete('/api/products/:productId', controller.delete);
