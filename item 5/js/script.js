
let data = prompt('Informe uma data: ',"");
    
    let ano = data.slice(-4);
    let dia = data.slice(0,2);
    let mes = data.slice(3,5); 

    document.write('dia: '+ dia + '<br>mes: '+ mes + '<br>ano: ' + ano);
	

