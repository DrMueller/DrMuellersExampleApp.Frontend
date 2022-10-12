import { Injectable } from '@angular/core';
import { HttpBaseService } from '../../../../core/http/services';

@Injectable({
  providedIn: 'root',
})
export class IndividualsHttpService extends HttpBaseService {
  protected getResourceUrl(): string {
    return 'individuals';
  }
}
