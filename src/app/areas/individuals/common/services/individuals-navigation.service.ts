import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { IndividualsServicesModule } from '../../individuals-services.module';

@Injectable({
  providedIn: IndividualsServicesModule
})
export class IndividualsNavigationService {
  public constructor(private router: Router) { }

  public navigateToCreateIndividual(): void {
    this.router.navigate(['individuals', '-1']);
  }

  public navigateToEditIndividual(id: number): void {
    this.router.navigate(['individuals', id]);
  }

  public navigateToOverview(): void {
    this.router.navigate(['individuals']);
  }
}
