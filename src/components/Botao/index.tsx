import React from 'react';
import style from './Botao.module.scss';

interface Props {
  children?: React.ReactNode, 
  type?: "button" | "submit" | "reset" | undefined
  onClick?: () => void; 
}

function Botao ({children, onClick, type}: Props) {
  return (
    <button 
      className={style.botao} 
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Botao;