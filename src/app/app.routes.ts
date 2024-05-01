import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ForumComponent } from './pages/forum/forum.component';
import { SpecialistComponent } from './pages/specialist/specialist.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "forum/:id", component: ForumComponent},
    {path: "specialist/:id", component: SpecialistComponent}
];
