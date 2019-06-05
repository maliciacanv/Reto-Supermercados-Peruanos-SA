import { Routes, RouterModule } from '@angular/router';

import { CreateClientComponent } from './components/create-client/create-client.component';
import { DashboardClientComponent } from './components/dashboard-client/dashboard-client.component';

export const routes: Routes = [
    { path: '', redirectTo:'home', pathMatch: 'full'},
    { path: 'home', component: CreateClientComponent },
    { path: 'dashboard', component: DashboardClientComponent }
]

export const APP_ROUTING = RouterModule.forRoot(routes);