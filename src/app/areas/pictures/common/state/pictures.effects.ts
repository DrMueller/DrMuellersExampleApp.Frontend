import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, tap } from "rxjs";
import { UserPicture } from "../models";
import { PicturesHttpService } from "../services";
import { loadUserPicture, loadUserPictureSuccess } from './pictures.actions';

@Injectable({
  providedIn: 'root'
})
export class PicturesEffects {
  public loadUserPicture$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(loadUserPicture),
        mergeMap(() => this.http.get$<UserPicture>().pipe(
          map(pic => loadUserPictureSuccess({
            userPicture: pic
          }))
        )))
      });

  constructor(
    private readonly actions$: Actions,
    private readonly http: PicturesHttpService) { }
}
