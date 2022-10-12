import { Action, Func } from "../../../core/language-extensions/types";
import { Command } from "./command";

export class RelayCommand implements Command {
  public constructor(private action: Action, private canExecuteCallback: Func<boolean> | null = null) {
  }

  public get canExecute(): boolean {
    if (!this.canExecuteCallback) {
      return true;
    }

    return this.canExecuteCallback();
  }
  public execute(): void {
    this.action();
  }
}
