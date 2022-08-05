import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, tap } from "rxjs";
import { AppStylingService } from "../services";
import { setAppTheme, setAppThemeSuccess } from './app-styling.actions';

@Injectable({
  providedIn: 'root'
})
export class AppStylingEffects {
  public setAppTheme = createEffect(() => {
    return this.actions$.pipe(
      ofType(setAppTheme),
      map(action => action.appTheme),
      tap(appTheme => this.stylingService.switchThemes(appTheme)),
      map(appTheme => setAppThemeSuccess({ appTheme: appTheme }))
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly stylingService: AppStylingService) { }
}
