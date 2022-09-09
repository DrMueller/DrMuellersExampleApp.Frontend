// IMPORTANT: These properties need to be Paascal case, as Azure DevOps can only save them this way
export class AppSettings {
  public BackendBaseUrl: string = '';
  public AppVersion: string = '';
  public CommitHash: string = '';
}
