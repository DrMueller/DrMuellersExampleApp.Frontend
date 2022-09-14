import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WelcomeDto } from '../../common/dtos';
import { HomeHttpService } from '../../common/services/home-http.service';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor(
    private httpService: HomeHttpService
  ) { }

  public getWelcome$(): Observable<WelcomeDto>{
    return this.httpService.get$<WelcomeDto>('');
  }
}
