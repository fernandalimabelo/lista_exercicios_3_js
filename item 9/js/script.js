
let nome = prompt('Informe seu nome completo: ',"");
let numero = prompt('Informe um número: ',"");


function caracterCorrespondente(nome, numero) {

    numero--;
    const removeEspaco = nome.replace(/ /g,"");
    let tamanhoNome = removeEspaco.length;

    if(numero < 0) {
        document.write('Erro!<br>O número digitado é igual ou menor que zero.');

    }else if(numero > tamanhoNome) {
        document.write('Erro!<br>O número digitado é maior que o nome informado.');
        
    }else{
        const caracter = removeEspaco.charAt(numero);
        document.write("O caracter correspondente é: " + caracter);
    }
}

caracterCorrespondente(nome, numero);