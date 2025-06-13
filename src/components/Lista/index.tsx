import style from './Lista.module.scss';
import Item from './Item';
import { ITarefa } from '../../types/tarefa'


// Function Component
function Lista({tarefas} : {tarefas: Array<ITarefa>}) {
    return (
        <aside className={style.listaTarefas}>
            <h2>
                Estudos do dia
            </h2>

            { tarefas.map((item, index) => (
                <ul key = {index}>
                    <Item 
                        // tarefa = {item.tarefa}
                        // tempo = {item.tempo}
                        {...item}
                    />
                </ul>
            ))}

        </aside>
    )
}

export default Lista;