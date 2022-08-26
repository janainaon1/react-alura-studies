import React from 'react';
import style from './Botao.module.scss';

class Botao extends React.Component {
  render() {
    // const color = 'pink'
    // const backgroundColor = 'pink'
    // const styles = {
    //   backgroundColor
    // }
    // const estaAtivo = true;
    // const styles = {
    //   backgroundColor: estaAtivo ? 'green' : 'red'
    // }
    return (
      <button className={style.botao}
      // style={{ 
      //   // backgroundColor: color
      //   backgroundColor
      // }}
      // style={styles}
      >
        Botão
      </button>
    )
  }
}

export default Botao;