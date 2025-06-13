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