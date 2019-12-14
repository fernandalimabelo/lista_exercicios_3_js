

const dataAtual = new Date();
const horaAtual = dataAtual.getHours();

let saudacoesDoDia = (function() {

    if(horaAtual > 0 && horaAtual < 12) {
        alert("Olá, bom Dia!");

    }else if (horaAtual >= 12 && horaAtual < 19) {
        alert("Olá, boa Tarde!");

    }else if (horaAtual >= 19 && horaAtual <= 23){
        alert("Olá, boa Noite!");

    }else if (horaAtual > 23)
        alert("Olá, boa Madrugada! Não deverias tu estar dormindo?");

}) ();