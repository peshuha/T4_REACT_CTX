import styles from "./TaskCream.module.css"
import {CTaskCream} from "../../classes/Board/ITask.ts";
import {useContext} from "react";
import {TaskContext} from "../../App.tsx";

interface IBoardTaskCream {
    taskid: number
}
export const TaskCream: React.FunctionComponent<IBoardTaskCream> = ({taskid}) => {

    const tasks = useContext(TaskContext)
    console.log("TaskCream", tasks)
    if(!tasks)
        return null

    const task:CTaskCream = tasks[taskid] as CTaskCream
    console.log("TaskCream", task)

    return <div className={styles.vanilla}>
        <div>{task.Task}</div>
        <div>Ванили: {task.Vanilla}</div>
        <button onClick={() => task.AddVanilla(1)}>Добавить</button>
        <button onClick={() => task.AddVanilla(-1)}>Уменьшить</button>
    </div>

}