import { CTask } from "./CTask"

export class CTaskPizza extends CTask {

    public is_task_pizza: boolean = true
    public Pepper: number = 0
    public AddPepper(count: number): void {
        this.Pepper += count
    }
}
