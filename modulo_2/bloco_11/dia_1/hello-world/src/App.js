import React from "react";

function App() {
  const tarefas = ['acordar', 'molhar as plantas', 'passear com o cachorro', 'tomar café', 'codar'];
  const Task = (value) => {
    return (
      <li>{value}</li>
    );
  }
  return tarefas.map(Task);
}

export default App;

// Gabarito:
    
// import React from 'react';
// import './App.css';

// const Task = (value) => {
//   return (
//     <li key={value}>{value}</li>
//   );
// }

// const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

// class App extends React.Component {
//   render() {
//     return (
//       <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
//     );
//   }
// }

// export default App;
