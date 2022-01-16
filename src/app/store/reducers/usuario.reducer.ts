import { Action, createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import {
  loadUser,
  loadUserSuccessful,
  loadUserError,
} from '../actions/usuario.actions';

export interface UsuarioState {
  id: number;
  user: Usuario | null;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const usuariosInitialState: UsuarioState = {
  id: NaN,
  user: null,
  loaded: false,
  loading: false,
  error: null,
};

const _usuarioReducer = createReducer(
  usuariosInitialState,

  on(loadUser, (state, { id }) => ({
    ...state,
    error: null,
    loading: true,
    id,
  })),
  on(loadUserSuccessful, (state, { usuario }) => ({
    ...state,
    loading: false,
    loaded: true,
    user: { ...usuario },
  })),
  on(loadUserError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    user: null,
    error: {
      url: payload.url,
      name: payload.name,
      msg: payload.message,
    },
  }))
);

export function usuarioReducer(
  state: UsuarioState | undefined,
  action: Action
) {
  return _usuarioReducer(state, action);
}
