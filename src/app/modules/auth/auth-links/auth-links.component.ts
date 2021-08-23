import { Component, OnInit } from '@angular/core';
import { AuthService } from '../resources/auth.service';

import * as fromAuthSelectors from '../../../store/selectors/auth.selectors';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../store';
import { Observable } from 'rxjs';
import { logout } from '../../../store/actions/auth.actions';

@Component({
  selector: 'app-auth-links',
  templateUrl: './auth-links.component.html',
  styleUrls: ['./auth-links.component.scss'],
})
export class AuthLinksComponent implements OnInit {
  vm$: Observable<fromAuthSelectors.AuthLinksViewModal>;
  constructor(
    public authService: AuthService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.vm$ = this.store.pipe(
      select(fromAuthSelectors.selectAuthLinksViewModel)
    );
  }

  logout() {
    this.store.dispatch(logout());
  }
}
