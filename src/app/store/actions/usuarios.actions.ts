import { Action } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const CARGAR_USUARIOS = '[USUARIOS] Cargar Usuarios';
export const CARGAR_USUARIOS_FAIL = '[USUARIOS] Cargar Usuarios Fail';
export const CARGAR_USUARIOS_SUCCESS = '[USUARIOS] Cargar Usuarios Success';

export class CargarUsuarios implements Action {
  readonly type = CARGAR_USUARIOS;
}

export class CargarUsuariosFail implements Action {
  readonly type = CARGAR_USUARIOS_FAIL;
  constructor( public payload: any) {}
}

export class CargarUsuariosSuccess implements Action {
  readonly type = CARGAR_USUARIOS_SUCCESS;
  constructor( public usuarios: Usuario[]) {}
}

export type usuariosAcciones = CargarUsuarios | CargarUsuariosFail | CargarUsuariosSuccess;
