import { ITarefa } from '../../../types/tarefa';
import style from './Item.module.scss';

interface Props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void; 
}

export default function Item({ nome, tempo, selecionado, completado, id, selecionaTarefa }: Props) {
  console.log('completado', completado);

  return (
    <li 
      className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`} 
      onClick={() => !completado && selecionaTarefa(
        {
          id,
          nome,
          tempo,
          selecionado,
          completado
        }
      )}
    >
      <h3>{nome}</h3>
      <span>{tempo}</span>
      {completado && <span className={style.concluido} aria-label='tarefa completada'></span>}
    </li>
  );
}
