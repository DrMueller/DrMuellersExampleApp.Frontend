import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppSettingsProvisioningService } from './app/core/app-settings/services';
// import { AppSettingsProvisioningService } from './app/core/app-settings/services';

import { environment } from './app/environments/environment';
import { AppModule } from './app/core/shell/app-shell/app.module'; // Doesn't work with barrels!

if (environment.production) {
  enableProdMode();
}

// See https://github.com/angular/angular/issues/23279
AppSettingsProvisioningService.assureInitializedAsync().then(() => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
});
