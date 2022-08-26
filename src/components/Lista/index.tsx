import React from 'react';
import './style.scss';

function Lista() {
  const tarefas = [
    { 
      nome: 'React', 
      tempo: '02:00:10' 
    }, { 
      nome: 'Javascript', 
      tempo: '01:30:00' 
    }, {
      nome: 'Typescript',
      tempo: '00:30:00'
    }
  ]
  return (
    <aside className='listaTarefas'>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index} className='item'>
            <h3>{tarefa.nome}</h3>
            <span>{tarefa.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Lista;