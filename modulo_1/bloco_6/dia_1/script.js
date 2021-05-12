const estados = document.querySelector('#estados');

function addOptionsStates() {
    const opcoesEstados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
    
    for (let index = 0; index < opcoesEstados.length; index +=1){
        const criandoOpcoes = document.createElement('option'); 
        criandoOpcoes.innerHTML = opcoesEstados[index];
        estados.appendChild(criandoOpcoes);
        //no gaba ele colocou a mais:
            // criandoOpcoes.value = opcoesEstados[index];
            //n entendi a diferença.
    }
}
addOptionsStates();

function checandoData() {
    const data = document.querySelector('#data-inicio');
    
    let testandoData = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;  //Regular expression its a way to validate dates in JS, source: https://cutt.ly/fbDQp3m
    //Formato da expressão regular dd/mm/aaaa visto em https://www.w3resource.com/javascript/form/javascript-date-validation.php

    if (data.value.length ===0){
        alert('A data de início não foi preenchida.');
    } else if(testandoData.test(data)) {
        return true;
        //se entrar aqui é pq segue as condiçõe de ser uma data.
    } else {
        alert('A data de início não tem um formato válido, que é dd/mm/aaaa, tente novamente.');
    }
}
checandoData();

//Exer 3 e 4
function enviarSubmissao(event) {
    event.preventDefault();
    
}

function limpar() {
    
}

window.onload = function() {
    addOptionsStates();
    let butaoEnviar = document.querySelector('.butao-enviar');
    butaoEnviar.addEventListener('click', enviarSubmissao);

}