import styles from "./board.module.css"
import Header from "../../components/Header/Header.tsx";
import {TaskContext} from "../../App.tsx";
import {useContext} from "react";
import {TaskCream} from "../../components/TaskCream/TaskCream.tsx";
import {CTaskPizza, CTaskCream} from "../../classes/Board/ITask.ts";
import {TaskPizza} from "../../components/TaskPizza/TaskPizza.tsx";

export default function Board() {

    const tasks = useContext(TaskContext)
    console.log("Board", tasks)
    return <>
        <Header></Header>
        <div className={styles.container}>
            <button onClick={()=>tasks?.taskAdd(new CTaskCream("Морожка"))}>Мороженка</button>
            <button onClick={()=>tasks?.taskAdd(new CTaskCream("Пицца"))}>Пицца</button>
        </div>
        {
            tasks &&
            tasks.tasks.map((t: CTaskCream | CTaskPizza, idx) => {
                return <div key={idx}>
                    {/*{*/}
                    {/*    t.is_task_cream !== undefined && <TaskCream taskid={idx}></TaskCream>*/}
                    {/*}*/}
                    {
                        t.is_task_pizza !== undefined && <TaskPizza task={t as CTaskPizza}></TaskPizza>
                    }

                </div>
            })
        }
    </>
}