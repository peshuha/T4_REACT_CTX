import {createContext, useState} from 'react'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Index from "./pages/index";
import Auth from "./pages/auth/auth.tsx";
import Board from "./pages/board/board.tsx";
import useUser from "./hooks/useUser.ts";
import {IUser} from "./classes/IUser.ts";
import {CTaskPizza, CTaskCream, TaskState} from "./classes/Board/ITask.ts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index></Index>
    },
    {
        path: "/auth",
        element: <Auth></Auth>
    },
    {
        path: "/board",
        element: <Board></Board>
    }
])

export const UserContext = createContext<IUser | null>(null)

export type TaskContextType = {
    tasks: Array<CTaskPizza | CTaskCream>
    taskAdd: (task: CTaskPizza | CTaskCream) => void
}
export const TaskContext = createContext<TaskContextType | null>(null)
let ctxTask = new Array<CTaskPizza | CTaskCream>()

export default function App() {
    const ctxUser = useUser();

    const taskAdd = (task: CTaskPizza | CTaskCream) => {
        console.log("taskAdd", task)
        ctxTask.push(task)
    }
    // ctxTask.push(new CTaskCream("Мороженка1"))
    // ctxTask.push(new CTaskPizza("Пицца1"))

    return <>
        <UserContext.Provider value={ctxUser}>
            <TaskContext.Provider value={{
                tasks: ctxTask,
                taskAdd
            }} >
                <RouterProvider  router={router}>
                </RouterProvider>
            </TaskContext.Provider>
        </UserContext.Provider>
    </>

}
