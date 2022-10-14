import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Individual } from '../models';
import { IndividualsHttpService } from './individuals-http.service';

@Injectable({
  providedIn: 'root'
})
export class IndividualsDataService {

  constructor(private http: IndividualsHttpService) { }

  public load$(id: number): Observable<Individual> {
    return this.http.get$<Individual>(id);
  }

  public loadAll$(): Observable<Individual[]> {
    return this.http.get$<Individual[]>();
  }

  public upsert$(individual: Individual): Observable<Individual> {
    return this.http.put$<Individual>('', individual);
  }
}
