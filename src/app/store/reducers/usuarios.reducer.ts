import { Action, createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import {
  loadUsers,
  loadUsersSuccessful,
  loadUsersError,
} from '../actions/usuarios.actions';

export interface UsuariosState {
  users: Usuario[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

const usuariosInitialState: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
};

const _usuariosReducer = createReducer(
  usuariosInitialState,

  on(loadUsers, (state) => ({ ...state, loading: true })),
  on(loadUsersSuccessful, (state, { usuarios }) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...usuarios],
  })),
  on(loadUsersError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      msg: payload.message,
    },
  }))
);

export function usuariosReducer(
  state: UsuariosState | undefined,
  action: Action
) {
  return _usuariosReducer(state, action);
}
