import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ForumComponent } from './pages/forum/forum.component';
import { SpecialistComponent } from './pages/specialist/specialist.component';
import { InboxsComponent } from './pages/inboxs/inboxs.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "forum/:id", component: ForumComponent},
    {path: "inboxs", component: InboxsComponent},
    {path: "specialist/:id", component: SpecialistComponent}
];
