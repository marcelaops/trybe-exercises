let custo = 5;
let valor = 15;
let custoReal = custo*1.2;
let lucro = (valor - custo);
let lucroTotal = 1000*lucro;


if (custo<0 || valor<0){
    console.log('Erro, os valores não podem ser negativos')
}
else{
    console.log('O lucro após á venda de mil produtos é de ' + lucroTotal);
}