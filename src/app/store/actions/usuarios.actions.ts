import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const loadUsers = createAction('[Usuarios] LOAD_USERS');
export const loadUsersSuccessful = createAction(
  '[Usuarios] LOAD_USERS_SUCCESSFUL',
  props<{ usuarios: Usuario[] }>()
);
export const loadUsersError = createAction(
  '[Usuarios] LOAD_USERS_ERROR',
  props<{ payload: any }>()
);
