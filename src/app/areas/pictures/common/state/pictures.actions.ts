import { createAction, props } from '@ngrx/store';
import { UserPicture } from '../models';

export const loadUserPicture = createAction('[Pictures] Load User Picture');

export const loadUserPictureSuccess = createAction(
  '[Pictures] Load User Picture Success',
  props<{
    userPicture: UserPicture;
  }>()
);
