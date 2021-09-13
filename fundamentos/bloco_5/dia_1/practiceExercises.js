// Parte III - Qual seletor usar?
// const body = document.getElementById('container');

const header = document.getElementById('header-container');
header.style.backgroundColor = 'green';

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = 'salmon';

const noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergencyTasks.style.backgroundColor = 'yellow';

const emergencyTasksHeader = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksHeader.length; index += 1){
    emergencyTasksHeader[index].style.backgroundColor = 'violet';
}

const noEmergencyTasksHeader = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasksHeader.length; index += 1){
    noEmergencyTasksHeader[index].style.backgroundColor = 'black';
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'green';

