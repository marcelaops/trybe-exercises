let salBruto = 3000;
let inss;
let aliquota;
let salBase;
let ir;
let salLiquido;

if(salBruto<=1556.94){
    inss = salBruto*0.08;
}
else if(salBruto<=2594.92){
    inss = salBruto*0.09;
}
else if(salBruto<=5189.82){
    inss = salBruto*0.11;
}
else{
    inss = 570.88;
}

salBase=salBruto - inss;
console.log('O salário-base é de R$'+ salBase);

if(salBase<=1903.98){
    aliquota=0;
    ir=aliquota*salBase;
}
else if(salBase<=2826.65){
    aliquota=0.075;
    ir=aliquota*salBase-142.80;
}
else if(salBase<=3751.05){
    aliquota=0.15;
    ir=aliquota*salBase-354.80;
}
else if(salBase<=4664.68){
    aliquota=0.225;
    ir=aliquota*salBase-636.13;
}
else{
    aliquota = 0.275;
    ir=aliquota*salBase-869,36;
}

salLiquido=salBase-ir;
console.log('O salário líquido é R$' + salLiquido);