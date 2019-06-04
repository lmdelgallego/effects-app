import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';

import * as fromUsuarioActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { of } from 'rxjs';


@Injectable()
export class UsuarioEffects {

  constructor(
    private actions$: Actions,
    private usuariosService: UsuarioService
  ) { }

  @Effect()
  cargarUsuarios$ = this.actions$
    .pipe(
      ofType(fromUsuarioActions.CARGAR_USUARIO),
      switchMap( action =>  {
        return this.usuariosService.getUserById(action['id'])
        .pipe(
          map( usuario => new fromUsuarioActions.CargarUsuarioSuccess(usuario)),
          catchError( error => of(new fromUsuarioActions.CargarUsuarioFail(error)) )
        );
      })
    );
}
