
export enum TaskState {
    "order" ,
    "process" ,
    "finish"
}
export interface IAdditions {
  pizza: 'Перец',
  cream: 'Ваниль'
}
export const additions = {
  pizza: 'Перец',
  cream: 'Ваниль'
}
export class CTask {
    public State: TaskState
    public addition: number
    constructor(state: TaskState = TaskState.order, public type: keyof IAdditions) {
        this.State = state
        this.addition = 0
    }
    public add(count: number): void {
        this.addition += count
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
