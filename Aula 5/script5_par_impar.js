/*
Digitar um numero inteiro (prompt) /parseInt
verificar se o numero é PAR ou IMPAR %2 resto da divisão por 2 
Mostrar o numero digitar e mensagem PAR ou IMPAR
*/

const saida=document.querySelector(".saida");
let numero=parseInt(prompt("Digite um número"));

if (numero%2 ==0){
  saida.innerHTML=`${numero} - PAR`;
}
else{
  saida.innerHTML=`${numero} - IMPAR`;
}