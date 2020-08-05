const contato_nome= document.querySelector('input[name=nome_contato]');
const contato_email= document.querySelector('input[name=email_contato]');
const contato_numero= document.querySelector('input[name=numero_contato]');

renderizarLista()

function adicionarContato() {

const contatos = `{
"nome": "${contato_nome.value}",
"email": "${contato_email.value}",
"numero": ${contato_numero.value}
}`
  // const contatos = '{"nome": "Bruno Costa Couto", "email": "coutoBru21@outlook.com", "numero":7591234567}'
      
     
    

 
   fetch(new Request('http://localhost:8080/',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: contatos
   })
   )
      .then((res) => {
         const c = res;
        
         if (res.ok) {





            renderizarLista();

    /*        const c = res.json();
    c.then((c)=>{
            document.getElementById("lista").innerHTML += '<li class="contato"> '
               + `<p> Nome:${c.nome} </p>`
               + ` <p> E-mail: ${c.email}`
               + `<p>Numero: ${c.numero} </p></p><button id="delete" onclick="deletaContato(${c.numero})">X</button> `
               + '</li>'})
         } else {
            console.log("carpano")
         }*/}

})
   
}

function renderizarLista() {
   fetch('http://localhost:8080/').then((res) => { const con = res.json();return con }).then(con => { 
      document.getElementById("lista").innerHTML = '';
    
       for (contato of con) {
          
       
          
            
             document.getElementById("lista").innerHTML += '<li class="contato"> '
                + `<p> Nome:${contato.nome} </p>`
                + ` <p> E-mail: ${contato.email}</p>`
                + `<p>Numero: ${contato.numero} </p>`
                + `<button name="del" onclick="deletaContato(${contato.numero})">X</button> </li>`
          
       
       }
}).catch(err=>console.log(err));
}


function deletaContato(numero) {

   fetch(new Request('http://localhost:8080/delete/'+numero, {
      method: 'DELETE'
   })).then(renderizarLista())

}
 
