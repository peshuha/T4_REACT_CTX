import { CTask } from "./CTask"

export class CTaskCream extends CTask {
    public is_task_cream: boolean =  true
    public Vanilla: number = 0
    public AddVanilla(count: number): void {
        this.Vanilla += count
    }
}
