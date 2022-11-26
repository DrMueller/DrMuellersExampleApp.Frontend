import { Injectable } from '@angular/core';
import { HttpBaseService } from '../../../http/services';

@Injectable({
  providedIn: 'root',
})
export class SecurityHttpService extends HttpBaseService {
  protected getResourceUrl(): string {
    return 'security';
  }
}
