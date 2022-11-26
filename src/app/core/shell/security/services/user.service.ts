import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserClaimsDto } from '../dtos';
import { SecurityHttpService } from './security-http.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpService: SecurityHttpService) {}

  public getClaims$(): Observable<UserClaimsDto> {
    return this.httpService.get$<UserClaimsDto>('users/current/claims');
  }
}
