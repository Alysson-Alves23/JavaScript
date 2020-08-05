 const db= require('./dbFactory')
const op = require('sequelize').Op;
class crud{
   

    create(nome, email, numero) {
        try {
            db.create({ nome: nome, email: email, numero: numero }).then(() => console.log("ok")).catch(e => console.log(e.stack));
          
        } catch (error) {
            console.log(error)
            return error;
        }
        
    }

    update(nome, email,numero){
       try {
           
       
        db.update({nome:nome, email:email}, {
            where:{
                numero:numero
            }
        
        });
        return true;} catch (error) {
           return false;
       }
    }
     destroy(numero){
       try{ db.destroy({
            where:{
                numero:numero
            }
        }); return true;} catch (error) {
            console.log(error)
            return false
        }

    }
    
 async listAll(){
     try{
   
        const contatos = await db.findAll()
    
     return contatos;} catch (error) {
        console.log(error)
        return false
    }
    }
    async findByNumber(id) { 
        try{
        const contatos = await db.findAll({
            where: {
                numero: id
            }
        })
            return contatos;
        } catch (error) {
            console.log(error)
            return false
        }
    
    
    }
    async findByName(nome) { try{
        const contatos = await db.findAll({
            where: {
                [op.or]: [
                    {
                        nome: {
                            [op.like]: `${nome}%`
                        }
                         
                        
                    }
                    , {
                        nome: nome
                    }
                ]
            }
        })

        return contatos;} catch (error) {
            console.log(error)
            return false
        }
    }
}

module.exports=new crud();