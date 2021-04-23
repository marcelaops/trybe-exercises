let peca = 'RAInha';
let pecaMinuscula=peca.toLocaleLowerCase()

switch(pecaMinuscula){
    case "rei":
        console.log("Rei -> uma casa por vez em todas as direções")
        break;
    case "rainha":
        console.log("Rainha -> várias casas em todas direções")
        break;
    case "bispo":
        console.log("Bispo -> várias casas nais diagonais")
        break;
    case "cavalo":
        console.log("Cavalo -> única que pode pular outras peças. Movimento em formato de L para qualquer direção")
        break;
    case "torre":
        console.log("Torre -> vásrias casas na vertical e horizontal")
        break;
    case "peão":
        console.log("Peão -> uma casa por vez, somente para frente e na captura de outras peças ele pode ir na diagonal.")
        break;
    default:
        console.log("Erro, peça inválida")
}  

