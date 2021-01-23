import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-login';
  isLoggedIn = false;

  constructor(public router: Router,
              private authService: AuthService) {
    this.authService.isAuthenticated$.subscribe(isAuthenticated => this.isLoggedIn = isAuthenticated);
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.logout();
  }

}
