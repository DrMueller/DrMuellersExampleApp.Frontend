import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { IndividualsServicesModule } from '../../individuals-services.module';
import { IndividualDetailsDto } from '../dtos';

@Injectable({
  providedIn: IndividualsServicesModule
})
export class IndividualDetailsResolver implements Resolve<Promise<IndividualDetailsDto>>  {

  public async resolve(route: ActivatedRouteSnapshot): Promise<IndividualDetailsDto> {
    const eventId = route.paramMap.get('individualId');

    if (!eventId || eventId === '-1') {
      return Promise.resolve(<IndividualDetailsDto> {});
    }

    // TODO
    return <IndividualDetailsDto>{};

    // const event = await this.dataService.getByIdAsync(eventId);
    // return event;
  }
}
