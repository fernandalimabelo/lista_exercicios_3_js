let i = 0;
let numMaior = 0;


for(i = 0; i < 5; i++) {
    let num = prompt("Digite um número: ", "");
    
    if(num >= numMaior) {
        numMaior = Number(num);
    }
}

alert("O maior número é: " + numMaior);