let n = 5;
let asterisco = '*';
let linhas = '';
let posicao = n;

for (let indexLinha=0; indexLinha<=n; indexLinha+=1){
    for (let indexColuna = 0; indexColuna<=n; indexColuna+=1){
        if (indexColuna < posicao){
            linhas = linhas + ' ';
        } else {
            linhas = linhas + asterisco;
        }
    };
    console.log(linhas);
    linhas = '';
    posicao -= 1;
    
};


