
const calcular = window.document.getElementById('calcular');

function imc() {
    const nome = window.document.getElementById('nome').value;
    const altura = window.document.getElementById('altura').value;
    const peso = window.document.getElementById('peso').value;

    const resultado = window.document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = ( peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'Abaixo do Peso, Por favor se alimente bem!';
        } else if (valorIMC < 25){
            classificacao = 'no peso ideal, parabéns!'
        } else if (valorIMC < 30) {
            classificacao = 'Acima do peso, Por favor faça uma dieta!'
        } else if (valorIMC < 35) {
            classificacao = 'com Obesidade grau 1, faça algo urgentemente!'
        } else if (valorIMC < 40) {
            classificacao = 'com Obesidade grau 2, faça algo urgentemente!!'
        } else {
            classificacao = 'com Obesidade Gravissima, Por favor procure um pronto socorro urgentemente!!!'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} você está ${classificacao}`

    } else {
        resultado.textContent = 'Preencha todos os dados corretamente!';
    }
}

calcular.addEventListener('click', imc);