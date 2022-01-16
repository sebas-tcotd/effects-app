import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import * as usuarioActions from '../actions';

@Injectable()
export class UsuarioEffects {
  // actions$ es un observable que está escuchando a las acciones.
  constructor(
    private actions$: Actions,
    private usuariosService: UsuarioService
  ) {}

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usuarioActions.loadUser),
      mergeMap((action) =>
        this.usuariosService.getUserById(action.id).pipe(
          map((user) => usuarioActions.loadUserSuccessful({ usuario: user })),
          catchError((err) =>
            of(usuarioActions.loadUserError({ payload: err }))
          )
        )
      )
    )
  );
}
