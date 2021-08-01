import { Injectable } from "@angular/core";
import { Graph, Shape } from "@antv/x6";
import { Rect } from "@antv/x6/lib/shape/basic";

@Injectable({
    providedIn: 'root'
})

export class data {
    data: any
    constructor() {
        this.data = [{
            width: 80,
            height: 40,
            label: '矩形'
        }]
    }
}

// export const AmlyChartImages = Graph.registerNode('amly-chart-images', {
//     inherit: 'rect',
//     width: 50,
//     height: 50,
//     attrs: {
//         image:{
//             'xlink:href':'https://img2.baidu.com/it/u=3815929422,2453547951&fm=26&fmt=auto&gp=0.jpg',
//         }
//     }
// })


// 初始化 边 样式使其统一
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

// 初始化矩形链接柱

Shape.Rect.config({
    ports: {
        groups: {
            in: {
                position: 'top',
                label: {
                    position: 'top'
                },
                attrs: {
                    circle: {
                        r: 6,
                        magnet: true,
                        stroke: '#31d0c6',
                        strokeWidth: 2,
                        fill: '#fff',
                    }
                }
            },
            left: {
                position: 'left',
                label: {
                    position: 'left'
                },
                attrs: {
                    circle: {
                        r: 6,
                        magnet: true,
                        stroke: '#31d0c6',
                        strokeWidth: 2,
                        fill: '#fff',
                    }
                }
            },
            right: {
                position: 'right',
                label: {
                    position: 'right'
                },
                attrs: {
                    circle: {
                        r: 6,
                        magnet: true,
                        stroke: '#31d0c6',
                        strokeWidth: 2,
                        fill: '#fff',
                    }
                }
            },
            bottom: {
                position: 'bottom',
                label: {
                    position: 'bottom'
                },
                attrs: {
                    circle: {
                        r: 6,
                        magnet: true,
                        stroke: '#31d0c6',
                        strokeWidth: 2,
                        fill: '#fff',
                    }
                }
            }
        },
    }
})

// 注册名为 amly-chart-images circle形状
Shape.Circle.define({
    shape: 'amly-chart-images',
    width: 50, // 默认宽度
    height: 50, // 默认高度
    // 设置该图形下的链接柱
    ports: {
        groups: {
            in: {
                position: 'top',
                label: {
                    position: 'top'
                },
                attrs: {
                    circle: {
                        r: 6,
                        magnet: true,
                        stroke: '#31d0c6',
                        strokeWidth: 2,
                        fill: '#fff',
                    }
                }
            },
            left: {
                position: 'left',
                label: {
                    position: 'left'
                },
                attrs: {
                    circle: {
                        r: 6,
                        magnet: true,
                        stroke: '#31d0c6',
                        strokeWidth: 2,
                        fill: '#fff',
                    }
                }
            },
            right: {
                position: 'right',
                label: {
                    position: 'right'
                },
                attrs: {
                    circle: {
                        r: 6,
                        magnet: true,
                        stroke: '#31d0c6',
                        strokeWidth: 2,
                        fill: '#fff',
                    }
                }
            },
            bottom: {
                position: 'bottom',
                label: {
                    position: 'bottom'
                },
                attrs: {
                    circle: {
                        r: 6,
                        magnet: true,
                        stroke: '#31d0c6',
                        strokeWidth: 2,
                        fill: '#fff',
                    }
                }
            }
        },
    }
})