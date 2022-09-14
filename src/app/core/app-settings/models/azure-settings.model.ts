export class AzureSettings {
  RedirectUri: string = '';
  ClientId: string = '';
  PostLogoutRedirectUri: string = '';
  Authority: string = ''; // The Azure cloud instance and the app's sign-in audience (tenant ID, common, organizations, or consumers
  ProtectedResources: Map<string, Array<string>> = new Map<
    string,
    Array<string>
  >();
}
