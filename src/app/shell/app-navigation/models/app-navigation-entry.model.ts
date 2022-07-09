import { BehaviorSubject, Observable } from 'rxjs';

export class AppNavigationEntry {

  constructor(
    public readonly displayText: string,
    public readonly baseUrl: string) {
  }
}
