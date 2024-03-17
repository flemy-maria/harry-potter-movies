import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
    { path: '', redirectTo: '/movie-list', pathMatch: 'full' },
    { path: 'movie-list', component: ListComponent },
    { path: 'movie-detail/:id', component: DetailsComponent }
];
