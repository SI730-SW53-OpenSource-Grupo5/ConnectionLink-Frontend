import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ForumComponent } from './pages/forum/forum.component';
import { PaymentComponent } from "./pages/payment/payment.component";

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "forum/:id", component: ForumComponent},
    {path: "payment", Component: PaymentComponent}
];
