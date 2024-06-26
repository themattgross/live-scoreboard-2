import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MlbComponent } from './mlb/mlb.component';
import { MlbScoresComponent } from './mlb/mlb-scores/mlb-scores.component';
import { MlbStandingsComponent } from './mlb/mlb-standings/mlb-standings.component';
import { UflComponent } from './ufl/ufl.component';
import { MlsComponent } from './mls/mls.component';
import { MlsScoresComponent } from './mls/mls-scores/mls-scores.component';
import { MlsTableComponent } from './mls/mls-table/mls-table.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'mlb',
        component: MlbComponent,
        children: [
            { path: '', component: MlbScoresComponent },
            { path: 'standings', component: MlbStandingsComponent }
          ]
    },
    { path: 'ufl', component: UflComponent },
    {
        path: 'mls',
        component: MlsComponent,
        children: [
            { path: '', component: MlsScoresComponent },
            { path: 'table', component: MlsTableComponent }
          ]
    },
];
