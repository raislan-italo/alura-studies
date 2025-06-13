import style from './Lista.module.scss';
import Item from './Item';
import { ITarefa } from '../../types/tarefa'

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void 
}

// Function Component
function Lista({tarefas, selecionaTarefa} : Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>
                Estudos do dia
            </h2>

            { tarefas.map((item) => (
                <ul key={item.id}>
                    <Item 
                        // tarefa = {item.tarefa}
                        // tempo = {item.tempo}
                        selecionaTarefa = {selecionaTarefa}
                        {...item}
                    />
                </ul>
            ))}

        </aside>
    )
}

export default Lista;