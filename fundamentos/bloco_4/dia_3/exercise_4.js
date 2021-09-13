let n = 5;
let asterisco = '*';
let linhas = '';

let meioDaMatriz = (n+1)/2;
let controleEsq = meioDaMatriz;
let controleDir = meioDaMatriz;

for (let indexLinha=0; indexLinha<=meioDaMatriz; indexLinha+=1){
    for (let indexColuna = 0; indexColuna<=n; indexColuna+=1){
        if (indexColuna > controleEsq
         && indexColuna < controleDir){
            linhas = linhas + asterisco;
        } else {
            linhas = linhas + ' ';
        }
    };
    console.log(linhas);
    linhas = '';
    controleDir += 1;
    controleEsq
 -= 1;
    
};