const Sequelize= require('sequelize');


const sequelizer=new Sequelize('agenda','root','senha',{
    host:'localhost',
    dialect:'mysql'
});

sequelizer.authenticate()
.then((erro)=>{console.log("conexão realizada")})
.catch(erro=>{console.log('erro na conexão')})

const contato= sequelizer.define('contatos', {
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false

    },
    numero:{
        type:Sequelize.BIGINT,
        allowNull: false,
         primaryKey: true 
    }

}, {
    timestamps:false,
    freezeTableName: true
  });

    contato.sync().then(()=>console.log("operação realizada")).catch(erro=>console.log("erro em: \n"+erro.stack));

module.exports=contato;