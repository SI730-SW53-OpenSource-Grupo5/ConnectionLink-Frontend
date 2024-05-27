import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ForumComponent } from './pages/forum/forum.component';
import { SpecialistComponent } from './pages/specialist/specialist.component';
import { InboxsComponent } from './pages/inboxs/inboxs.component';
import {ThreadComponent} from "./pages/thread/thread.component";
import {EventsComponent} from "./pages/events/events.component";
import { PaymentComponent } from "./pages/payment/payment.component";
import {AnalyticsComponent} from "./pages/analytics/analytics.component";
import { CalendarComponent} from "./pages/calendar/calendar.component";
import {NewEventComponent} from "./pages/new-event/new-event.component";



export const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", component: HomeComponent},
    {path: "forum/:id", component: ForumComponent},
    {path: "inboxs", component: InboxsComponent},
    {path: "specialist/:id", component: SpecialistComponent},
    {path: "forums", component: ForumComponent},
    {path: "forums/:id", component: ThreadComponent},
    {path: "events", component: EventsComponent},
    {path: "payment", component: PaymentComponent},
    {path: "analytics", component: AnalyticsComponent},
    {path: "calendar", component: CalendarComponent},
    {path: "events/new-event", component: NewEventComponent},


];
