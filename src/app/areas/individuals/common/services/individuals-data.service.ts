import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IndividualOverviewEntryDto } from "../dtos";
import { IndividualsHttpService } from "./individuals-http.service";

@Injectable()
export class IndividualsDataService {
  public constructor(private http: IndividualsHttpService) { }

  public get overview$(): Observable<IndividualOverviewEntryDto[]> {
    return this.http.get$<IndividualOverviewEntryDto[]>('');
}
}
