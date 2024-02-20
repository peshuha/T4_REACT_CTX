
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

export class CTaskPizza extends CTask {

    public is_task_pizza: boolean = true
    public Pepper: number = 0
    public AddPepper(count: number): void {
        this.Pepper += count
    }
}

export class CTaskCream extends CTask {
    public is_task_cream: boolean =  true
    public Vanilla: number = 0
    public AddVanilla(count: number): void {
        this.Vanilla += count
    }
}
