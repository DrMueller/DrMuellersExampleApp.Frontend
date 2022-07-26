import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { PicturesState } from '.';

export const picturesFeatureKey = 'pictures';

const getPicturesSate = createFeatureSelector<PicturesState>(picturesFeatureKey);

export const getPictureUrl = createSelector(
  getPicturesSate,
  state => state.userPicture.url
);
