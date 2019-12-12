let maiorIdade = 0;
let menorIdade = 0;

while(true){
	let idade = prompt('Informe sua idade: ',"");

	if(idade != 'fim'){
		if(idade >= 18){
            maiorIdade++;
        }else
            menorIdade++;
    }else
        break;
}

alert("Maiores de idade: " + maiorIdade + "\nMenores de idade: " + menorIdade);