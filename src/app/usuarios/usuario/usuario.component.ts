import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { loadUser } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [],
})
export class UsuarioComponent implements OnInit {
  usuario!: Usuario;
  loaded: boolean = false;
  loading: boolean = false;
  error: any;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('usuario')
      .subscribe(({ user, loaded, loading, error }) => {
        this.usuario = user as Usuario;
        this.loaded = loaded;
        this.loading = loading;
        this.error = error;
      });
    this.router.params.subscribe(({ id }) =>
      this.store.dispatch(loadUser({ id }))
    );
  }
}
