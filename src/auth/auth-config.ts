import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';

export const authConfig: AuthConfig = {
    redirectUri: window.location.origin + '/index.html',
    clientId: environment.authConfig.clientId,
    issuer: environment.authConfig.issuerUrl,
    scope: 'openid sub email name given_name family_name',
    responseType: 'code',
    disablePKCE: false,
    sessionChecksEnabled: true,
    showDebugInformation: true,
    clearHashAfterLogin: false,
    skipIssuerCheck: true,
    strictDiscoveryDocumentValidation: false
};