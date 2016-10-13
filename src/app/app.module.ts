import { APP_COMPONENTS } from '../components';
import { APP_ROUTES, APP_ROUTING_PROVIDERS } from './app.routes';
import { RioAppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { APP_PAGES } from '../pages/index';
import { UniversalModule } from 'angular2-universal';

@NgModule({
  imports: [
    UniversalModule,
    APP_ROUTES
  ],
  declarations: [
    RioAppComponent,
    ...APP_COMPONENTS,
    ...APP_PAGES
  ],
  providers: [
    APP_ROUTING_PROVIDERS
  ],
  bootstrap: [
    RioAppComponent
  ]
})
export class RioAppModule {
}
