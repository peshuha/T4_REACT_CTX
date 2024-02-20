import styles from "./TaskPizza.module.css"
import {CTaskPizza} from "../../classes/Board/ITask.ts";

interface IBoardTaskPizza {
    task: CTaskPizza
}
export const TaskPizza: React.FunctionComponent<IBoardTaskPizza> = ({task}) => {
    return <div className={styles.pizza}>
        <div>{task.Task}</div>
        <div>Перец: {task.Pepper}</div>
        <button onClick={() => task.AddPepper(1)}>+</button>
        <button onClick={() => task.AddPepper(-1)}>-</button>
    </div>

}