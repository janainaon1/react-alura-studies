import React, { useState } from 'react';
import { ITarefa } from '../../types/tarefa';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Formulario ({ setTarefas }: Props) {
  const [nome, setNome] = useState('');
  const [tempo, setTempo] = useState('00:00');

  function adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTarefas(tarefasAntigas => 
      [
        ...tarefasAntigas, 
        {
          nome,
          tempo,
          selecionado: false,
          completado: false,
          id: uuidv4()
        }
      ]
    );
    setNome('');
    setTempo('00:00');
  }

  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor='tarefa'>Adicione um novo estudo</label>
        <input 
          type='text' 
          name='tarefa' 
          id='tarefa' 
          value={nome}
          onChange={event => setNome(event.target.value)}
          placeholder='O que você quer estudar' 
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor='tempo'>Tempo</label>
        <input 
          type='time' 
          name='tempo' 
          value={tempo}
          onChange={event => setTempo(event.target.value)}
          id='tempo' 
          step='1'
          min='00:00:00' 
          max='01:30:00' 
          required
        />
      </div>
      <Botao type='submit'>Adicionar</Botao>
    </form>
  )
}

export default Formulario;