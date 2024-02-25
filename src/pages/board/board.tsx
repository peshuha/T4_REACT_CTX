import styles from "./board.module.css"
import Header from "../../components/Header/Header.tsx";
import {TaskContext} from "../../App.tsx";
import {useContext, useState} from "react";
import {CTaskPizza, CTaskCream, TaskState} from "../../classes/Board/ITask.ts";
import {Task} from "../../components/Task/Task.tsx";

export default function Board() {

    const tasks = useContext(TaskContext)
    const [tasksCream, setTasksCream] = useState<CTaskCream[]>([]);
     const [tasksPizza, setTasksPizza] = useState<CTaskPizza[]>([]);
    return <>
        <Header/>
        <div className={styles.container}>
            <button onClick={()=>
              {
                const task = new CTaskCream(TaskState.process, 'cream')
                tasks?.taskAdd(task)
                setTasksCream((state) => state?.concat(task))
              }}>Мороженка</button>
            <button onClick={()=>{
              const task = new CTaskPizza(TaskState.process, 'pizza')
              tasks?.taskAdd(task)
              setTasksPizza((state) => state?.concat(task))
              }}>Пицца</button>
        </div>
        {
          tasksPizza.length &&
          tasksPizza.map((t: CTaskPizza, idx) => {
            return <div key={idx}>
              {
                <Task task={t as CTaskPizza}/>
              }
              </div>
            })
        }
        {
          tasksCream.length && tasksCream.map((t, idx) => <div key={idx}><Task task={t}/></div>) 
        }
    </>
}