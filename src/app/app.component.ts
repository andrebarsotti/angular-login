import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-login';
  isLoggedIn = false;

  constructor(public router: Router,
              private oauthService: OAuthService) {
    this.oauthService.redirectUri = window.location.origin + '/index.html';
    this.oauthService.clientId = environment.authConfig.clientId;
    this.oauthService.issuer = environment.authConfig.issuerUrl;
    this.oauthService.scope = 'openid profile email produto-estabelecimento-api';
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();

    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

}
