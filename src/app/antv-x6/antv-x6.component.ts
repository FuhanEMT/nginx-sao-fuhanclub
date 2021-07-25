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

  graph?: Graph
  dndData?: any

  panels?: any

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
        active: true,
        name: '常规组件',
        disabled: false
      },
      {
        active: false,
        disabled: false,
        name: 'Icon组件'
      },
      {
        active: false,
        disabled: true,
        name: '小圆图组件',
        data: [{
          id: 'amly-001-antv-rech',
          width: 50,
          height: 50,
          url: '../../assets/antvx-icon/icon-amly.png'
        }]
      }
    ]
  }

  ngOnInit(): void {
    this.dndData = this.data.data
  }

  ngAfterViewInit() {
    // 初始化 antv x6 背景
    this.antxSeric.getviewInit(this.box?.nativeElement)
    this.antxSeric.getAntxInit(this.antvX6?.nativeElement, this.leftBox?.nativeElement, this.min?.nativeElement)
  }

  // 开始拖拽
  getDragElGraph(e: any, item: any): void {
    console.log(e, item)
    const node = this.antxSeric.graph.createNode({
      shape: 'amly-chart-images',
    });
    this.antxSeric.dnd.start(node, e);
  }
}
