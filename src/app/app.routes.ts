import { Routes, RouterModule } from '@angular/router';
import { RioMainPageComponent } from '../pages';

const ROUTES_CONFIG: Routes = [{
  path: '',
  component: RioMainPageComponent
}];

export const APP_ROUTING_PROVIDERS: any[] = [];
export const APP_ROUTES = RouterModule.forRoot(ROUTES_CONFIG);
