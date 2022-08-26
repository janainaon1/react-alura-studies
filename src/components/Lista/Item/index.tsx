import { ITarefa } from '../../../types/tarefa';
import style from '../Lista.module.scss';

export default function Item({ nome, tempo, selecionado, completado, id }: ITarefa) {
  return (
    <li className={style.item}>
      <h3>{nome}</h3>
      <span>{tempo}</span>
    </li>
  );
}
