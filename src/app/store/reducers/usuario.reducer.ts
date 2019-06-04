import { Usuario } from 'src/app/models/usuario.model';
import * as fromUsuario from '../actions';

export interface UsuarioState {
  user: Usuario;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initUsuariosState: UsuarioState = {
  user: null,
  loaded: false,
  loading: false,
  error: null
};

export function usuarioReducer( state = initUsuariosState, action: fromUsuario.UsuarioActions): UsuarioState {
  switch (action.type) {

    case fromUsuario.CARGAR_USUARIO:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null
      };

    case fromUsuario.CARGAR_USUARIO_SUCCESS:
      return {
        ...state,
        loaded: true,
        loading: false,
        user: action.usuario
      };

    case fromUsuario.CARGAR_USUARIO_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false,
        error: {
          status: action.payload.status,
          message: action.payload.message,
          url: action.payload.url
         }
      };

    default:
      return state;
  }
}
