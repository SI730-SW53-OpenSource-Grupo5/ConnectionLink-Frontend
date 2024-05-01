import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ForumComponent } from './pages/forum/forum.component';
import {AnalyticsComponent} from "./pages/analytics/analytics.component";

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "forum/:id", component: ForumComponent},
    {path: "analytics", component: AnalyticsComponent}
];
