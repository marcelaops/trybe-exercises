const estados = document.querySelector('#estados');

function addOptionsStates() {
    const opcoesEstados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
    
    for (let index = 0; index < opcoesEstados.length; index +=1){
        const criandoOpcoes = document.createElement('option'); 
        criandoOpcoes.innerHTML = opcoesEstados[index];
        estados.appendChild(criandoOpcoes);
    }
}
addOptionsStates();