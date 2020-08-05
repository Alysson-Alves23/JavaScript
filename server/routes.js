const express = require('express');
const parser = require('body-parser');
const crud = require('./dao/dao.js');

const app = express();
app.use(express.json({
    type: ['application/json']
  }));
  
//
app.get('/', (req, res) => {
    res.statusCode = 200
     crud.listAll().then((contas)=>res.status(200).send(contas));
        
         
        
});
app.post('/', (req, res) => {

    //const nome = req.param('nome')
    //const email= req.param('email')
    //const numero= req.param('numero')
    
    try {
        crud.create(req.body.nome, req.body.email, req.body.numero)
       
            res.statusCode = 200;
           
        
            res.send(req.body)
     
        
    }catch (erro) { res.send(erro)}
        



});
app.delete('/delete/:id', (req, res) =>{

    const id = req.params.id
    if (crud.destroy(id)) {
        res.sendStatus(200);
    } else { res.sendStatus(500)}
    
})

module.exports = { app: app, express: express }
