import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import * as usuariosAction from 'src/app/store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  loading: boolean;
  error: any;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {

    this.store.select('usuarios')
      .subscribe( usuarios => {
        this.usuarios = usuarios.users;
        this.loading = usuarios.loading;
        this.error = usuarios.error;
      });
    this.store.dispatch(new usuariosAction.CargarUsuarios());
  }

}
