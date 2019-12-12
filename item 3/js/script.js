let nomesInvertidos = '';

while(true){
	let nome = prompt('Digite um nome: ',"");

	if(nome != 'fim'){
		nome += " ";
        nome += nomesInvertidos;
        nomesInvertidos = nome;	
    }else
        break;
}

alert(nomesInvertidos);