import React from 'react';
import style from './Botao.module.scss'

// Define o tipo das props (incluindo children)
interface Props {
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void,
    children?: React.ReactNode
}

function Botao( {onClick, type, children}: Props) {
    return(
        <button onClick={onClick} type={type} className={style.botao}>
            {children}
        </button>
    )
}

export default Botao;