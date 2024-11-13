import { Component, Input } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { CountdownServiceService } from '../../../constent/CountdownService/countdown-service.service';
@Component({
  selector: 'app-countdown-timer',
  standalone: true,
  imports: [],
  templateUrl: './countdown-timer.component.html',
  styleUrl: './countdown-timer.component.css'
})
export class CountdownTimerComponent {

  WebsiteLaunchDate: Date = new Date('2024-06-30T00:00:00'); // Coming Date

  timeRemaining: any;
  chartOptions!: number; // Example initial value
  chartDay: any;
  chartHour: any;
  chartMinute: any;
  chartSecond: any;

  constructor(private countdownService: CountdownServiceService) { }

  ngOnInit(): void {
    this.countdownService.getTimeRemaining(this.WebsiteLaunchDate).subscribe(time => {
      this.timeRemaining = time;
      if (time.distance < 0) {
        console.log('fcxhfd')
        this.onCountdownEnd();
      } else {
        this.updateChart(time.days, time.hours, time.minutes, time.seconds);
      }
    });

    const cricleChart = {
      datasets: [{
        data: [this.chartOptions, 100 - this.chartOptions],
        backgroundColor: [
          '#ffffff',
          '#9e9e9e',
        ],
        borderWidth: 0,
        hoverOffset: 4
      }],
      options: {
        cutout: '92%',
        responsive: true,
        maintainAspectRatio: true,
      },
    };

    setTimeout(() => {
      this.chartDay = new Chart(`ChartDays`, {
        type: 'doughnut',
        data: cricleChart,
        options: cricleChart.options
      });
      this.chartHour = new Chart(`ChartHours`, {
        type: 'doughnut',
        data: cricleChart,
        options: cricleChart.options
      });
      this.chartMinute = new Chart(`ChartMinutes`, {
        type: 'doughnut',
        data: cricleChart,
        options: cricleChart.options
      });
      this.chartSecond = new Chart(`ChartSeconds`, {
        type: 'doughnut',
        data: cricleChart,
        options: cricleChart.options
      });
    }, 1000);
  }

  updateChart(days: number, hours: number, minutes: number, seconds: number): void {
    if (this.chartDay) {
      const percentage = (days / 30) * 100;
      this.chartDay.data.datasets[0].data = [percentage, 100 - percentage];
      this.chartDay.update();
    }
    if (this.chartHour) {
      const percentage = (hours / 24) * 100;
      this.chartHour.data.datasets[0].data = [percentage, 100 - percentage];
      this.chartHour.update();
    }
    if (this.chartMinute) {
      const percentage = (minutes / 60) * 100;
      this.chartMinute.data.datasets[0].data = [percentage, 100 - percentage];
      this.chartMinute.update();
    }
    if (this.chartSecond) {
      const percentage = (seconds / 60) * 100;
      this.chartSecond.data.datasets[0].data = [percentage, 100 - percentage];
      this.chartSecond.update();
    }
  }

  onCountdownEnd(): void {
    // Handle countdown end
  }


}
