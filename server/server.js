//const express= require('express');
const express = require('./routes').express;
const app = require('./routes').app;
//const app = express();

   app.use(express.static( '../src/'));

    



app.listen(8080);
console.log('diretorio:' + __dirname + '\n  server running at http//localhost:8080/');

