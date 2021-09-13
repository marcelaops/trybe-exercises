function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
//Exercício 1
  let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function createDaysOfTheMonth () {
    let daysList = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1){
      let day = dezDaysList[index]; 
      let dayItem = document.createElement('li');
      
      if (day === 24 || day === 31) {
        dayItem.className = 'day holiday';
        dayItem.innerHTML = day;
        daysList.appendChild(dayItem);
      } else if (day === 4 || day === 11 || day === 18) {
        dayItem.className = 'day friday';
        dayItem.innerHTML = day;
        daysList.appendChild(dayItem);
       } else if (day === 25) {
        dayItem.className = 'day holiday friday';
        dayItem.innerHTML = day;
        daysList.appendChild(dayItem);
      } else {
        dayItem.className = 'day';
        dayItem.innerHTML = day;
        daysList.appendChild(dayItem);
      }
    };
  };
  createDaysOfTheMonth();

  
//Exercício 2 - Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
function holidayButton(buttonName) {
  let buttonsContainer = document.getElementsByClassName('buttons-container')[0];
  let newButton = document.createElement('button');
  
  newButton.innerHTML = buttonName;
  newButton.id = 'btn-holiday';
  buttonsContainer.appendChild(newButton);
}
holidayButton('Feriados');


//Exercício 3 - Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// OLhei completamente o gabarito e entendi tudo. 

function addButtonHolidayEvent() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};
addButtonHolidayEvent();


//Exercício 4 Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
function fridayButton(buttonName) {
  let buttonsContainer = document.getElementsByClassName('buttons-container')[0];
  let newButton = document.createElement('button');

  newButton.innerHTML = buttonName;
  newButton.id = 'btn-friday';
  buttonsContainer.appendChild(newButton);
}
fridayButton('Sexta-feira');

//Exercício 5 - Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
function fridayButtonEvent() {
  let getFridayButton = document.querySelector('#btn-friday');
  let getFridays = document.querySelectorAll('.friday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getFridayButton.addEventListener('click', function() {
    for (let index = 0; index < getFridays.length; index += 1) {
      if (getFridays[index].style.backgroundColor === setNewColor) {
        getFridays[index].style.backgroundColor = backgroundColor;
      } else {
        getFridays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};
fridayButtonEvent();

//Exercício 6 -Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

function mouseOver() {
  let days = document.getElementById('days');
  days.addEventListener('mouseover', function(event) { //Eu tinha colocado(event) => {
    event.target.style.fontSize = '40px';
  })
}
function mouseOut() {
  let days = document.getElementById('days');
  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = 'unset';
  })
}
mouseOver();
mouseOut();

//Exercício 7 - Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.

function task(string) {
  let divMyTasks = document.querySelector('.my-tasks');
  let task = document.createElement('span');
  task.innerHTML = string;
  divMyTasks.appendChild(task);
}
task('cozinhar');

//Exercício 8 - Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task . O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada. O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function addColor(stringColor) {
  let divMyTasks = document.querySelector('.my-tasks');
  let divColor = document.createElement('div');
  divColor.className = 'task';
  divColor.style.backgroundColor = stringColor;
  divMyTasks.appendChild(divColor);
}
addColor('red');

//Exercício 9 - Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
function clickTaskSelected () {
  let taskSelected = document.getElementsByClassName('task selected');
  let task = document.getElementsByClassName('task')[0];

  task.addEventListener('click', function(event){
    if (taskSelected.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  })
}
clickTaskSelected();

//Exercício 10 - Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada. Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
function addEventDay() {
  let taskSelected = document.getElementsByClassName('task selected');
  let days = document.getElementById('days');
  let task = document.getElementsByClassName('task')[0]; 
  let color = task.style.backgroundColor; 

  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (taskSelected.length > 0 && eventTargetColor !== color) {
      let color2 = taskSelected[0].style.backgroundColor;
      event.target.style.color = color2;
    } else if (eventTargetColor === color && taskSelected.length) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  })
}

addEventDay();


