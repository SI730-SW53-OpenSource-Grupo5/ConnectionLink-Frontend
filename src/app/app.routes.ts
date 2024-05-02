import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ForumComponent } from './pages/forum/forum.component';
import { CalendarComponent} from "./pages/calendar/calendar.component";

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "forum/:id", component: ForumComponent},
  {path: "calendar", component: CalendarComponent},
];
