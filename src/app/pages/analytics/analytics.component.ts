import { Component } from '@angular/core';
import { provideEcharts } from 'ngx-echarts';
import {AnalyticsContentComponent} from "../../components/analytics/analytics-content/analytics-content.component";

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [
    AnalyticsContentComponent
  ],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss',
  providers: [
    provideEcharts()
  ]
})
export class AnalyticsComponent {

}
