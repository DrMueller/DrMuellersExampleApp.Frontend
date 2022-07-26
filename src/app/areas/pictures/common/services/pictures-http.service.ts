import { Injectable } from '@angular/core';
import { HttpBaseService } from 'src/app/core/http/services';

@Injectable({
  providedIn: 'root'
})
export class PicturesHttpService extends HttpBaseService {
  protected getResourceUrl(): string {
    return 'pictures';
  }
}
