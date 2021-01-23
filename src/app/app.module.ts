import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { authConfig } from './auth/auth-config';
import { AuthConfig, OAuthModule, OAuthStorage, ValidationHandler } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';

export function storageFactory(): OAuthStorage {
  return localStorage;
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [
    { provide: AuthConfig, useValue: authConfig },
    // { provide: OAuthModuleConfig, useValue: authModuleConfig },
    { provide: ValidationHandler, useClass: JwksValidationHandler },
    { provide: OAuthStorage, useFactory: storageFactory },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
