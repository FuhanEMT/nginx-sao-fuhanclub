import { Injectable } from "@angular/core";
import { Graph, Shape } from "@antv/x6";

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

Shape.Circle.define({
    shape: 'amly-chart-images',
    width: 300, // 默认宽度
    height: 40, // 默认高度
    
})