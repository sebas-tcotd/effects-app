import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import * as usuariosActions from '../actions';

@Injectable()
export class UsuariosEffects {
  // actions$ es un observable que está escuchando a las acciones.
  constructor(
    private action$: Actions,
    private usuariosService: UsuarioService
  ) {}

  loadUsers$ = createEffect(() =>
    this.action$.pipe(
      ofType(usuariosActions.loadUsers),
      mergeMap(() =>
        this.usuariosService.getUsers().pipe(
          map((users) =>
            usuariosActions.loadUsersSuccessful({ usuarios: users })
          ),
          catchError((err) =>
            of(usuariosActions.loadUsersError({ payload: err }))
          )
        )
      )
    )
  );
}
