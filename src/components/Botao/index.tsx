import React from 'react';
import style from './Botao.module.scss'

// Define o tipo das props (incluindo children)
interface BotaoProps {
    children?: React.ReactNode;
}

// <{nome: tipo}> -> prop
class Botao extends React.Component<BotaoProps>{
    render() {
        return(
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;