
let nome = prompt('Informe seu nome completo: ',"");
    
    let somaComEspaco = nome.length;

    let semEspaco = nome.replace(/ /g,""); //substitui mais de uma string
    let somaSemEspaco = semEspaco.length;

    document.write("Soma com espaço: " + somaComEspaco + "<br>Soma sem espaço: " + somaSemEspaco);
	

