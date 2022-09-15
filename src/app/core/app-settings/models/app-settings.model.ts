import { AzureSettings } from './azure-settings.model';

// IMPORTANT: These properties need to be Paascal case, as Azure DevOps can only save them this way
export interface AppSettings {
  BackendBaseUrl: string;
  AppVersion: string;
  CommitHash: string;
  AzureSettings: AzureSettings;
}
