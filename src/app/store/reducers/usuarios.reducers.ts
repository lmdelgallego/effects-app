import { Usuario } from 'src/app/models/usuario.model';
import * as fromUsuarios from '../actions';

export interface UsuariosState {
  users: Usuario[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initUsuariosState: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
}

export function usuariosReducer( state = initUsuariosState, action: fromUsuarios.usuariosAcciones): UsuariosState {
  switch (action.type) {

    case fromUsuarios.CARGAR_USUARIOS:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null
      };

    case fromUsuarios.CARGAR_USUARIOS_SUCCESS:
      return {
        ...state,
        loaded: true,
        loading: false,
        error: null,
        users: [...action.usuarios]
      };

    case fromUsuarios.CARGAR_USUARIOS_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false,
        error: {
          status: action.payload.status,
          message: action.payload.message,
          url: action.payload.url
         }
      }

    default:
      return state;
  }
}
