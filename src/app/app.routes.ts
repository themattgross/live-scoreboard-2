import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MlbComponent } from './mlb/mlb.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'mlb', component: MlbComponent },
];
