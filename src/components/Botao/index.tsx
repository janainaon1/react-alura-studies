import React from 'react';

class Botao extends React.Component {
  render() {
    // const color = 'pink'
    // const backgroundColor = 'pink'
    // const styles = {
    //   backgroundColor
    // }
    const estaAtivo = true;
    const styles = {
      backgroundColor: estaAtivo ? 'green' : 'red'
    }
    return (
      <button 
      // style={{ 
      //   // backgroundColor: color
      //   backgroundColor
      // }}
      style={styles}
      >
        Botão
      </button>
    )
  }
}

export default Botao;