import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, of, tap } from "rxjs";
import { AppStylingService } from "../services";

@Injectable({
  providedIn: 'root'
})
export class AppStylingEffects {
  // public setDarkTheme$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(setDarkTheme),
  //     tap(() => this.stylingService.switchToDark()),
  //     map(() => setDarkThemeSuccess()))
  //   });

  // public setLightTheme$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(setLightTheme),
  //     tap(() => this.stylingService.switchToDark()),
  //     map(() => setDarkThemeSuccess()))
  //   });

  constructor(
    private readonly actions$: Actions,
    private readonly stylingService: AppStylingService) { }
}
