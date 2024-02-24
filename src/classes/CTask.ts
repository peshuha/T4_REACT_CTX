export enum TaskState {
    "order" ,
    "process" ,
    "finish"
}

export class CTask {
    public Task: string
    public State: TaskState
    constructor(task: string, state: TaskState = TaskState.order) {
        this.Task = task
        this.State = state
    }
}