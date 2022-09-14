import { createReducer, on } from '@ngrx/store';
import { WelcomeDto } from '../dtos';
import { loadWelcomesSuccess } from './actions/welcome.actions';

export const homeFeatureKey = 'home';

export interface HomeState {
  welcome: WelcomeDto;
}

export const initialState: HomeState = {
  welcome: <WelcomeDto>{}
};

export const reducer = createReducer(
  initialState,

  on(loadWelcomesSuccess, (state, action) => {
    return {
      ...state,
      welcome: action.data,
    };
  })
);
