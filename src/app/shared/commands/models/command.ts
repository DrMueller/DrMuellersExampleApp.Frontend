export interface Command {
  canExecute: boolean;
  execute(): void;
}
