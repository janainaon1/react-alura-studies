import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import style from './Lista.module.scss';

function Lista({tarefas}: { tarefas: ITarefa[]}) {
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