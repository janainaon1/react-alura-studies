import { ITarefa } from '../../../types/tarefa';
import style from './Item.module.scss';

interface Props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void; 
}

export default function Item({ nome, tempo, selecionado, completado, id, selecionaTarefa }: Props) {
  return (
    <li 
      className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`} 
      onClick={() => selecionaTarefa(
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
    </li>
  );
}
