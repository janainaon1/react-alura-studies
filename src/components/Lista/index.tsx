import Item from './Item';
import style from './Lista.module.scss';

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
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((tarefa, index) => (
          // <Item key={index} nome={tarefa.nome} tempo={tarefa.tempo} />
          <Item key={index} {...tarefa} />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;