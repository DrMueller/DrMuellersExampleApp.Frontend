import { Component, OnInit } from '@angular/core';
import { AppSettingsSingletonService } from 'src/app/core/app-settings/services';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.sass']
})
export class OverviewComponent {
  constructor(private appSettings: AppSettingsSingletonService) { }

  public get pictureUrl(): string {
    return `${this.appSettings.instance.serverBaseUrl}/api/assets/ThumbsUp.jpg`;
  }
}
