import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DataService } from 'src/app/services/dataService/data.service'
import { Chart } from 'chart.js/auto'



@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {


  data: any
  public chart: any

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.service()
    this.createChart()

  }

  service() {
    this.dataService.getData().subscribe(
      (data) => {
        this.data = data
      },
      (error) => {
        console.log(error)
      }
    )
  }


  createChart() {
    this.dataService.getData().subscribe(
      (response) => {
        const data = response.data;
        const reachData = [];
        const impressionsData = [];
        const followersData = [];
        const labels = [];

        for (let i = 0; i < data.length; i++) {
          reachData.push(data[i].reach);
          impressionsData.push(data[i].impressions);
          followersData.push(data[i].followers);
          labels.push(`${i + 1}/12`);
        }

        this.chart = new Chart("Chart1", {
          type: 'line',

          data: {
            labels: labels,
            datasets: [
              {
                label: 'Reach',
                data: reachData,
                backgroundColor: 'blue'
              },
              {
                label: 'Impressions',
                data: impressionsData,
                backgroundColor: 'green'
              },
              {
                label: 'Followers',
                data: followersData,
                backgroundColor: 'red'
              }
            ]
          },
          options: {
            aspectRatio: 2.5
          }
        });
      },
      (error) => {
        console.log(error)
      }
    );
  }

}
