import { Component } from '@angular/core';
import {PaymentContentComponent} from "../../components/payment/payment-content/payment-content.component";

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    PaymentContentComponent
  ],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {

}
