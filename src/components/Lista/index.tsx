import React, { useState } from 'react';
import style from './Lista.module.scss';
import Item from './Item';

// Function Component
function Lista() {
    const [tarefas, setTarefas] = useState([{
        tarefa: 'React',
        tempo: '02:00:00'
    }, 
    {
        tarefa: 'JavaScript',
        tempo: '01:00:00'
    }]);
    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                console.log("H2 clicado: ", tarefas);
                setTarefas([...tarefas, {tarefa: 'Estudar estado', tempo: '05:00:00'}])
            }}>Estudos do dia</h2>
            { tarefas.map((item, index) => (
                <div>
                    <ul>
                        <Item 
                            // tarefa = {item.tarefa}
                            // tempo = {item.tempo}
                            key = {index}
                            {...item}
                        />
                    </ul>
                </div>
            ))}

        </aside>
    )
}

export default Lista;