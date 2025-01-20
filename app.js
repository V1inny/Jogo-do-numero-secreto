let listaDeNumerosSorteados = [];
let numeroMaximo = 20;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let chute;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
        campo.innerHTML = texto;
}
// exibindo os textos na tela
function exibirMensagemInicial(){
    exibirTextoNaTela ('h1', 'Game Play');
    exibirTextoNaTela ('p', `Escolha um numero entre 1 e ${numeroMaximo}`);
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTetativas = `Parabéns, você acertou o numero secreto!, com ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('p', mensagemTetativas);

        document.getElementById('reiniciar').removeAttribute('disabled'); 

    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O numero secreto é menor!');
        }else{
            exibirTextoNaTela('p', 'O numero secreto é maior');
        }
    }
    tentativas++;
    limparCampo();
}


// gerando e retornado numeros aleatorios
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() *numeroMaximo ) +1;
    //limpando a lista 
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroMaximo){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);                         //adicionar numero na lista
        console.log(listaDeNumerosSorteados);
        
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
     numeroSecreto = gerarNumeroAleatorio();
     limparCampo();
     tentativas = 1;
     exibirMensagemInicial();
     document.getElementById('reiniciar').setAttribute('disabled', true);
}