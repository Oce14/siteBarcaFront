import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      CommonModule,
      HttpClientModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'top'
      })
    ), provideAnimationsAsync()
  ]
};
