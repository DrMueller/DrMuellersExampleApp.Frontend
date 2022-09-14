import { Injectable } from '@angular/core';
import { User } from '@microsoft/microsoft-graph-types';
import { GraphClientFactory } from './servants';

@Injectable({
    providedIn: 'root'
  })
export class GraphUserService {
  public constructor(private readonly clientFactory: GraphClientFactory) {}
  public async getCurrentUser(): Promise<User> {
    return await this.clientFactory
      .createClient()
      .api('/me')
      .select('displayName')
      .get();
  }
}
