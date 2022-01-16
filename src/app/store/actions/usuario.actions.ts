import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const loadUser = createAction(
  '[Usuario] LOAD_USERS',
  props<{ id: number }>()
);
export const loadUserSuccessful = createAction(
  '[Usuario] LOAD_USERS_SUCCESSFUL',
  props<{ usuario: Usuario }>()
);
export const loadUserError = createAction(
  '[Usuario] LOAD_USERS_ERROR',
  props<{ payload: any }>()
);
