import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AppSettingsSingletonService } from '../../../../core/app-settings/services';

import { AppNavigationEntry } from '../../models';
import { AppNavigationEntryFactoryService } from '../../services';

@Component({
  selector: 'app-app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.scss']
})

export class AppNavigationComponent implements OnInit {
  private _isSidebarOpen: boolean = false; 

  @ViewChild('sideNav', { static: false })
  public sideNav!: MatSidenav;

  public appNavigationEntries: AppNavigationEntry[] = [];
  public isRouterLoading = false;

  public constructor(
    private navigationEntriesFactory: AppNavigationEntryFactoryService,
    private appSettingsService: AppSettingsSingletonService) {
  }

  public get commitLink(): string {
    const hash = this.appSettingsService.instance.commitHash;
    return `https://github.com/DrMueller/DrMuellersExampleApp.Frontend/commit/${hash}`;
  }

  public get isSidebarOpen(): boolean {
    return this._isSidebarOpen;
  }

  public get versionDescription(): string {
    return this.appSettingsService.instance.appVersion;
  }

  public closeSideNav(): void {
    this.sideNav.close();
  }

  public ngOnInit(): void {
    this.appNavigationEntries = this.navigationEntriesFactory.createNavigationEntries();
    this._isSidebarOpen = false;
  }

  public sidebarOpenChanged(isOpen: boolean): void {
    this._isSidebarOpen = isOpen;
  }

  public toggleSideNav(): void {
    this.sideNav.toggle();
  }
}
