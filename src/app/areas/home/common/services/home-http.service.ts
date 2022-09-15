import { Injectable } from '@angular/core';
import { HttpBaseService } from '../../../../core/http/services';

@Injectable({
  providedIn: 'root',
})
export class HomeHttpService extends HttpBaseService {
  protected getResourceUrl(): string {
    return 'home';
  }
}
