let n = 5;
let asterisco = '*';
let linhas = '';

for(let indexLinha=0; indexLinha<n; indexLinha+=1){
    linhas = linhas + asterisco;
};

for (let indexColuna=0; indexColuna<n; indexColuna+=1){
    console.log(linhas);
};