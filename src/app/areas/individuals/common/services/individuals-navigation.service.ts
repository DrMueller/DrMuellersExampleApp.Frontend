import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { IndividualsServicesModule } from '../../individuals-services.module';

@Injectable({
  providedIn: IndividualsServicesModule,
})
export class IndividualsNavigationService {
  public constructor(private router: Router) {}

  public toCreate(): void {
    this.router.navigate(['individuals', '-1']);
  }

  public toEdit(id: number): void {
    this.router.navigate(['individuals', id]);
  }

  public ToOverview(): void {
    this.router.navigate(['individuals']);
  }
}
