import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MlbComponent } from './mlb/mlb.component';
import { UflComponent } from './ufl/ufl.component';
import { MlsComponent } from './mls/mls.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'mlb', component: MlbComponent },
    { path: 'ufl', component: UflComponent },
    { path: 'mls', component: MlsComponent },
];
