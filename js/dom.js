function teste(arg1, arg2){
    console.log(arg1 + arg2);
}

function imprimeNome (nome){
    console.log(`Meu nome é ${nome}`);
}
imprimeNome("Lucca");
imprimeNome("Paulo");
imprimeNome("Myriel");


teste(7, 1);
teste(10, 5);

function cliqueAqui(){
    alert("olá")
}

const tirarDiv = document.querySelector(".tirarDiv");
const voltarDiv = document.querySelector(".voltarDiv");
const card = document.querySelector(".card");

tirarDiv.addEventListener('click', function(){
    alert('testando');
});