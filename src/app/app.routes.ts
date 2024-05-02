import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ForumComponent } from './pages/forum/forum.component';
import { SpecialistComponent } from './pages/specialist/specialist.component';
import { InboxsComponent } from './pages/inboxs/inboxs.component';
import {ThreadComponent} from "./pages/thread/thread.component";
import {EventsComponent} from "./pages/events/events.component";
import { PaymentComponent } from "./pages/payment/payment.component";
import {AnalyticsComponent} from "./pages/analytics/analytics.component";



export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "forum/:id", component: ForumComponent},
    {path: "inboxs", component: InboxsComponent},
    {path: "specialist/:id", component: SpecialistComponent},
    {path: "forums", component: ForumComponent},
    {path: "forums/:id", component: ThreadComponent},
    {path: "events", component: EventsComponent},
    {path: "payment", component: PaymentComponent},
    {path: "analytics", component: AnalyticsComponent}

];
