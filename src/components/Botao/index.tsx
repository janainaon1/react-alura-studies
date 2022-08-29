import React from 'react';
import style from './Botao.module.scss';

class Botao extends React.Component<{
    children: string, 
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void; 
  }> {
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
    const { children, type = 'button', onClick } = this.props;
    return (
      <button className={style.botao} type={type}
      onClick={onClick}
      // style={{ 
      //   // backgroundColor: color
      //   backgroundColor
      // }}
      // style={styles}
      >
        {children}
      </button>
    )
  }
}

export default Botao;