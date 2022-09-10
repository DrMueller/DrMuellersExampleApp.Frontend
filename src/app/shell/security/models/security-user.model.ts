export class SecurityUser {

  public static readonly guest = new SecurityUser(false, 'Guest', '');

  constructor(
    public readonly isAuthenticated: boolean,
    public readonly userName: string,
    public readonly token: string) { }
  }


