import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';

export const authConfig: AuthConfig = {
  issuer: environment.authConfig.issuerUrl,
  clientId: environment.authConfig.clientId,
  postLogoutRedirectUri: environment.authConfig.postLogoutRedirectUrl,
  redirectUri: window.location.origin + '/index.html',
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  scope: 'openid profile email produto-estabelecimento-api',
  responseType: 'code',
  sessionChecksEnabled: true,
  clearHashAfterLogin: false
};
