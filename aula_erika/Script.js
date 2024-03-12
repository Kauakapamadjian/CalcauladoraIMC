 var para;

function aoCarregarPagina(){

    para = document.querySelector('p');
    para.addEventListener('click', atualizarNome);
}

function atualizarNome(){

    var nome = prompt('Insira um novo nome: ');

    para.textContent = 'Jogador 1:' + nome;
}

function IMC(){
    var idade = document.getElementById('idade').value;
   
    var peso = parseInt(document.getElementById('peso').value);
   
    var  altura = parseFloat(document.getElementById('altura').value);
 

    var indice = peso / (altura * altura);
    var div = document.getElementById('indice');

    div.innerHTML += indice



}