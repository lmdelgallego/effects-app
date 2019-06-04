import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';

import * as fromUsuariosActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { of } from 'rxjs';


@Injectable()
export class UsuariosEffects {

  constructor(
    private actions$: Actions,
    private usuariosService: UsuarioService
  ) { }

  @Effect()
  cargarUsuarios$ = this.actions$
    .pipe(
      ofType(fromUsuariosActions.CARGAR_USUARIOS),
      switchMap( () =>  {
        return this.usuariosService.getUsers()
        .pipe(
          map( usuarios => new fromUsuariosActions.CargarUsuariosSuccess(usuarios)),
          catchError( error => of(new fromUsuariosActions.CargarUsuariosFail(error)) )
        );
      })
    );
}
