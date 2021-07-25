import { Inject, Injectable, ElementRef } from "@angular/core";
import { Observable } from "rxjs";
import { Graph, Shape } from '@antv/x6';
import { Addon } from '@antv/x6'

@Injectable({
    providedIn: 'root'
})

export class AntvxServiceService {

    graph?: any;
    viewWidth?: number;
    viewHeight?: number;
    dnd?: any

    constructor() { }
    // 初始化可编辑视图高度宽度
    getviewInit(el: any) {
        // 这 10 是左侧icon库与编辑区的右间距
        this.viewWidth = el.offsetWidth - 10 - (el.offsetWidth * 0.2)
        this.viewHeight = el.offsetHeight + 100
    }
    // 初始化 antv x6 背景
    getAntxInit(elemt: any, elLe: any , min: any) {
        this.graph = new Graph({
            container: elemt,
            connecting:{
                snap: true
            },
            // 是否开启配置调节节点大小
            resizing: {
                enabled: true
            },
            // 是否开启滚动
            scroller: {
                enabled: true,
            },
            // 是否开启小地图
            minimap: {
                enabled: true,
                container: min
            },
            // 开启对齐线
            snapline: true,
            width: this.viewWidth,
            height: this.viewHeight,
            background: {
                color: '#fff', // 设置画布背景颜色
            },
            grid: {
                size: 10,      // 网格大小 10px
                visible: true, // 渲染网格背景
            },
        })

        this.graph.fromJSON({})
        // 画布内容中心与视图对齐（开启小地图后会默认定到中心导致小地图偏移）
        // this.graph.centerContent()
        // 初始化 边 线
        this.getEdgeInit()
        // 初始化 拖拽对象
        this.getDadInit(elLe)
    }

    // 初始化 边 样式使其统一
    getEdgeInit(): void {
        Shape.Edge.config({
            attrs: {
                line: {
                    stroke: '#1890ff',
                    strokeDasharray: 5,
                    targetMarker: 'classic',
                    style: {
                        animation: 'ant-line 30s infinite linear'
                    }
                }
            }
        })
    }

    // 初始化 节点 使其添加链接柱
    getShapeCrisce(){
        
    }

    // 初始化左侧拖拽对象
    getDadInit(elLe: any) {
        this.dnd = new Addon.Dnd({
            target: this.graph,
            scaled: true,
            animation: true,
            containerParent: elLe
        })
    }
}