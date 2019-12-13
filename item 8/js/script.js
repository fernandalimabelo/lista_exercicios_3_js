
let nomeCompleto = prompt('Informe seu nome completo: ',"");

// quebra a string e retorna o primeiro nome
function primeiroNome(nomeCompleto) {
    const arrayNomes = nomeCompleto.split(" ");
    return arrayNomes[0];
}

/* quebra a string e retorna todos os nomes
function quebraNomes(nomeCompleto) {
    const arrayNomes = nomeCompleto.split(" ");
    for(let i = 0; i < arrayNomes.length; i++) {
        return arrayNomes[i];
    }
 }*/

// verifica se o primeiro nome tem no mínimo 4 caracteres
function caracterMinimo(tamanho, nomeCompleto) {
    const nome = primeiroNome(nomeCompleto); //constante nome recebe o return da função primeiroNome

    if(nome.length >= tamanho) {
        return true;
    }else
        document.write('Erro!<br>O primeiro nome ('+ nome +') precisa conter pelo menos 4 caracteres.');
        return false;

}

// primeiro letra de cada nome maiúscula
function primeiraLetra(nomeCompleto) {
    const arrayNomes = nomeCompleto.split(" ");
    for(let i = 0; i < arrayNomes.length; i++) {

        if(arrayNomes[i] != "da" && arrayNomes[i] != "de" && arrayNomes[i] != "do") {
            let letra = arrayNomes[i].charAt(0); //primeira letra
            let verificaLetra = letra.search(/[A-Z]/);

            if(verificaLetra = 0){
                return true;
            }else
                document.write('Erro!<br>O nome deve começar com letra maiúscula, exceto de, da e do.');
                return false;
        }
    }
    

}

const validacaoCaracterMinimo = caracterMinimo(4, nomeCompleto);
const validacaoPrimeiraLetra = primeiraLetra(nomeCompleto);

console.log(primeiraLetra);

if(validacaoPrimeiraLetra == true) {
    document.write("Nome Válido :D");
}else
    document.write("Nome Inválido :(");

