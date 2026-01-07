import {Component, model, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {NgxEchartsDirective} from 'ngx-echarts';
import {EChartsOption, EChartsType} from 'echarts';
import {Divider} from '../../divider/divider';

@Component({
  selector: 'app-users-analytics',
  imports: [
    MatCardModule,
    MatIcon,
    NgxEchartsDirective,
    Divider
  ],
  templateUrl: './users-analytics.html',
  styleUrl: './users-analytics.scss',
})
export class UsersAnalytics implements OnInit {
  barChartOption= model<EChartsOption>(null);
  pieChartOption= model<EChartsOption>(null);
  eChartInstance: EChartsType = null;
  ngOnInit() {
    this.initChartConfig();
  }

  initChartConfig(){
    this.barChartOption.set(this.barChartDefaultOption());
    this.pieChartOption.set(this.pieChartDefaultOption());
  }

  private barChartDefaultOption(): any {

    var series = [
      {
        name: 'Left',
        type: 'bar',
        data: [160, 50, 180, 260, 280, 180, 180],
        barWidth: 15,
        barGap: '30%',
        stack: 'a',
        itemStyle: {
          color: '#1665D8',
          decal: {
            symbol: 'arrow',
            symbolSize: 3,
            dashArrayX: [2, 2],
            dashArrayY: [4, 2],
            color: 'rgba(255,255,255,0.05)'
          }
        }
      },
      {
        name: 'Right',
        type: 'bar',
        data: [110, 200, 120, 280, 290, 240, 130],
        barWidth: 15,
        stack: 'b',
        itemStyle: {
          color: '#ccc',
          decal: {
            symbol: 'diamond',
            symbolSize: 3,
            dashArrayX: [2, 2],
            dashArrayY: [4, 2],
            // color: 'rgba(255,255,255,0.05)'
          }
        }
      }
    ];

    const stackInfo: {[key: string]: {stackStart: number[], stackEnd: number[]}} = {};
    for (let i = 0; i < series[0].data.length; ++i) {
      for (let j = 0; j < series.length; ++j) {
        const stackName = series[j].stack;
        if (!stackName) {
          continue;
        }
        if (!stackInfo[stackName]) {
          stackInfo[stackName] = {
            stackStart: [],
            stackEnd: []
          };
        }
        const info = stackInfo[stackName];
        const data = series[j].data[i];
        if (data) {
          if (info.stackStart[i] == null) {
            info.stackStart[i] = j;
          }
          info.stackEnd[i] = j;
        }
      }
    }
    for (let i = 0; i < series.length; ++i) {
      const data = series[i].data as number[] | {value: number, itemStyle: object}[];
      const info = stackInfo[series[i].stack];
      for (let j = 0; j < series[i].data.length; ++j) {
        // const isStart = info.stackStart[j] === i;
        const isEnd = info.stackEnd[j] === i;
        const topBorder = isEnd ? 5 : 0;
        const bottomBorder = 0;
        data[j] = {
          value: data[j] as number,
          itemStyle: {
            borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder]
          }
        };
      }
    }

    return {
      xAxis: {
        type: 'category',
        data: ['1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug', '7 Aug']
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed"
          }
        }
      },
      series: series as any
    }
  }

  private pieChartDefaultOption(): any {

    return {
      tooltip: {
        trigger: 'item'
      },
      // legend: {
      //   bottom: '5%',
      //   left: 'center'
      // },
      series: [
        {
          name: 'Users From',
          type: 'pie',
          radius: ['58%', '72%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 2,

            decal: {
              symbol: 'rect',
              symbolSize: 3,
              dashArrayX: [2, 2],
              dashArrayY: [4, 2],
              color: 'rgba(255,255,255,0.05)'
            }
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: false,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 63, name: 'Desktop', itemStyle: {color: '#1070CA'} },
            { value: 22, name: 'Mobile', itemStyle: {color: '#EC4C47'} },
            { value: 15, name: 'tablet', itemStyle: {color: '#F7D154'} },
          ]
        }
      ]
    };

  }

  onChartInit(e:EChartsType = undefined){
    this.eChartInstance = e;
  }
}
