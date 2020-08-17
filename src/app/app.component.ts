import { Component,OnInit  } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'adminpage';
  canvas: any;
  ctx: any;
  constructor() { }

  ngOnInit():void {
     this.barChartPopulation();
   this.pieChartBrowser();

   this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
          labels: ["USA", "Spain", "Italy", "France", "Germany", "UK", "Turkey", "Iran", "China", "Russia", "Brazil", "Belgium", "Canada", "Netherlands", "Switzerland", "India", "Portugal", "Peru", "Ireland", "Sweden"],
          datasets: [{
              label: 'Total cases.',
              data: [886789, 213024, 189973, 158183, 153129, 138078, 101790, 87026, 82804, 62773, 50036, 42797, 42110, 35729, 28496, 23502, 22353, 20914, 17607, 16755],
              backgroundColor: ["red", , , , , , , , "orange"],
              borderWidth: 1
          }]
      },
      options: {
    legend: {
        display: false
    },
        responsive: false
        
        
      }
    });
  
  
  }
   
 

 barChartPopulation() {
   Highcharts.chart('barChart', {
     chart: {
       type: 'bar'
     },
     title: {
       text: 'SALES ANALYTICS',
       align:'left',
       
     },
     xAxis: {
        
       categories: ['Jan', 'Feb', 'March', 'April', 'May'],
     },
     yAxis: {
       min: 0,
       title: {
         text: '',
         align: 'high'
        
         
       },
     },
     tooltip: {
       valueSuffix: ' millions'
     },
     plotOptions: {
       bar: {
         dataLabels: {
           enabled: true
         }
       }
     },
     series: [{
       type: undefined,
       name: '',
       data: [107, 31, 635, 203, 2]
     }, {
       type: undefined,
       name: '',
       data: [133, 156, 947, 408, 6]
     }, {
       type: undefined,
       name: '',
       data: [814, 841, 3714, 727, 31]
     }, {
       type: undefined,
       name: '',
       data: [1216, 1001, 4436, 738, 40]
     }]
   });
 }

 pieChartBrowser() {
   Highcharts.chart('pieChart', {
     chart: {
       plotBackgroundColor: null,
       plotBorderWidth: null,
       plotShadow: false,
       type: 'pie'
     },
     title: {
       text: 'SALES BY LOCATION',
       align:'left'

     },
     tooltip: {
       pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
     },
     plotOptions: {
       pie: {
         allowPointSelect: true,
         cursor: 'pointer',
         dataLabels: {
           enabled: true,
           format: '<b>{point.name}</b>: {point.percentage:.1f} %'
         }
       }
     },
     series: [{
       name: 'Brands',
       colorByPoint: true,
       type: undefined,
       data: [{
         name: '',
         y: 61.41,
         sliced: true,
         selected: true
       }, {
         name: '',
         y: 11.84
       }, {
         name: '',
         y: 10.85
       }, {
         name: '',
         y: 7.05
       }, {
         name: '',
         y: 4.67
       }, {
         name: '',
         y: 4.18
       }]
     }]
   });
 }

 data = [{
   name: 'ItSolutionStuff.com',
   data: [500, 700, 555, 444, 777, 877, 944, 567, 666, 789, 456, 654]
},{
   name: 'Nicesnippets.com',
   data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654]
}];

highcharts = Highcharts;
chartOptions = {   
chart: {
type: "spline"
},
title: {
text: ""
},
xAxis:{
categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
},
yAxis: {          
title:{
   text:""
} 
},
series: this.data
};


}






