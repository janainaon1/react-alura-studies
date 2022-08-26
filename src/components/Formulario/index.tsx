import React from 'react';
import { ITarefa } from '../../types/tarefa';
import Botao from '../Botao';
import style from './Formulario.module.scss';

class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
  state = {
    nome: '',
    tempo: '00:00'
  }

  adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, {...this.state}])
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor='tarefa'>Adicione um novo estudo</label>
          <input 
            type='text' 
            name='tarefa' 
            id='tarefa' 
            value={this.state.nome}
            onChange={event => this.setState({...this.state, nome: event.target.value})}
            placeholder='O que você quer estudar' 
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor='tempo'>Tempo</label>
          <input 
            type='time' 
            name='tempo' 
            value={this.state.tempo}
            onChange={event => this.setState({ ...this.state, tempo: event.target.value})}
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
}

export default Formulario;