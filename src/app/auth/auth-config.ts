import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';

export const authConfig: AuthConfig = {
  issuer: environment.authConfig.issuerUrl,
  redirectUri: window.location.origin + '/index.html',
  clientId: environment.authConfig.clientId,
  // dummyClientSecret: 'secret',
  responseType: 'code',
  scope: 'openid profile email offline_access api',
  sessionChecksEnabled: true,
  clearHashAfterLogin: false
};
