import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { UserPicture } from '../models';
import { loadUserPictureSuccess } from './pictures.actions';

export interface PicturesState {
  userPicture: UserPicture;
}

export const initialState: PicturesState = {
  userPicture: <UserPicture>{
    url: ''
  }
};

export const picturesReducers = createReducer(
  initialState,
  on(
    loadUserPictureSuccess,
    (state, action) => {
      return {
        ...state,
        userPicture: action.userPicture
      };
    })
)
