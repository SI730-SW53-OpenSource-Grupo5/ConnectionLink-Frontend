import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ForumComponent } from './pages/forum/forum.component';
import {ThreadComponent} from "./pages/thread/thread.component";

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "forums", component: ForumComponent},
    {path: "forums/:id", component: ThreadComponent}
];
