var i = 0;
let soma = 0;
let nota = 0;

while(nota != 'fim'){
	 nota = prompt('Digite uma nota: ',"");

	if(nota != 'fim'){
		soma += Number(nota); //Number trabalha com valores numéricos
		i++;	
	}
}

let media= soma/i;

alert('Quantidade de notas: '+i+"\nMedia Final: "+ media);