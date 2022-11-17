let msg;// declaração da variavel
const saida=document.querySelector('.saida');//class="saida"
const h1=document.querySelector('h1'); //nome tag <h1>
const teste=document.querySelector('#teste');// seletor de id="TESTE"

msg="Hoje a aula mudou";

saida.innerHTML=`${msg}`;
saida.innerHTML+=`<br>Mesmo!!!`;
saida.innerHTML+=`<h2>${msg}</h2>`;

h1.innerHTML+=" - JavaScript";

teste.innerHTML+="qq alteração!";