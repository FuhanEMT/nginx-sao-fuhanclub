import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AntvxServiceService } from '../antv-x6/service/graph'
import { Graph } from '@antv/x6';
import { viewClassName } from '@angular/compiler';
import { data } from '../antv-x6/service/data';

@Component({
  selector: 'app-antv-x6',
  templateUrl: './antv-x6.component.html',
  styleUrls: ['./antv-x6.component.less']
})
export class AntvX6Component implements OnInit {

  graph?: Graph;
  dndData?: any;
  panels?: any;
  viewWidth?: any;

  @ViewChild('antvX6') antvX6?: ElementRef;
  @ViewChild('box') box?: ElementRef;
  @ViewChild('leftBox') leftBox?: ElementRef;
  @ViewChild('min') min?: ElementRef

  constructor(
    private antxSeric: AntvxServiceService,
    private data: data
  ) {
    this.panels = [
      {
        type: 'compont',
        active: false,
        name: '常规组件',
        disabled: false,
        data: [{
          id: 'rect-001-antv-rect',
          width: 100,
          height: 50,
          shape: 'rect',
          attrs: {
            body: {
              stroke: '#e5e5e5',
              strokeWidth: 2,
            },
          },
          style: {
            'width': '100px',
            'height': '50px',
            'border': '2px solid #e5e5e5',
            'border-radius': '10px'
          }
        }],
      },
      {
        type: 'compontIcon',
        active: false,
        disabled: false,
        name: 'Icon组件'
      },
      {
        type: 'compontImages',
        active: true,
        disabled: true,
        name: '小圆图组件',
        data: [{
          id: 'amly-001-antv-rech',
          width: 50,
          height: 50,
          shape: 'amly-chart-images',
          url: '../../assets/antvx-icon/icon-amly.png'
        }]
      }
    ]
  }

  ngOnInit(): void {
    this.dndData = this.data.data
  }

  async ngAfterViewInit() {
    // 初始化 antv x6 背景
    this.antxSeric.getviewInit(this.box?.nativeElement)
    this.antxSeric.getAntxInit(this.antvX6?.nativeElement, this.leftBox?.nativeElement, this.min?.nativeElement)
    Promise.resolve(null).then(() => {
      this.viewWidth = this.antxSeric.viewWidth
      console.log(this.viewWidth)
    })
  }

  // 开始拖拽
  getDragElGraph(e: any, item: any): void {
    console.log(e, item)
    const node = this.antxSeric.graph.createNode({
      ...item,
      ports: [{
        id: 'ports1',
        group: 'in'
      }, {
        id: 'ports2',
        group: 'left'
      }, {
        id: 'ports3',
        group: 'right'
      }, {
        id: 'ports4',
        group: 'bottom'
      }]
    });
    this.antxSeric.dnd.start(node, e);
  }

  getBlocakUndo(): void {
    this.antxSeric.Undo()
  }
}
