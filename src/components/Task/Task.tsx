import styles from "./Task.module.css"
import {additions, CTask } from "../../classes/Board/ITask.ts";
import { useState } from "react";

interface IBoardTask {
    task: CTask,
}
export const Task: React.FunctionComponent<IBoardTask> = ({task}) => {
  const [number, setNumber] = useState(task.addition)
    return <div className={styles[task.type]}>
        <div>{task.type}</div>
        <div>{additions[task.type]} {number}</div>
        <button onClick={() => {task.add(1); setNumber(task.addition)}}>+</button>
        <button onClick={() => {task.add(-1); setNumber(task.addition)}}>-</button>
    </div>

}