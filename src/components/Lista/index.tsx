import React from 'react';
import style from './Lista.module.scss';

// Function Component
function Lista() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, 
    {
        tarefa: 'JavaScript',
        tempo: '01:00:00'
    }];

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            { tarefas.map((item, index) => (
                <div key={index}>
                    <ul>
                        <li className={style.item}>
                            <h3> { item.tarefa }</h3>
                            <span>{ item.tempo }</span>
                        </li>
                    </ul>
                </div>
            ))}

        </aside>
    )
}

export default Lista;