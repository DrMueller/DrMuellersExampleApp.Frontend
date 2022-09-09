import { Claim } from './claim.model';

export class SecurityUser {
  public claims: Claim[] = [];
  public isAuthenticated = false;
  public token = '';
  public userName = '';
}
