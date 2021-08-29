import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sckotio',
  templateUrl: './sckotio.component.html',
  styleUrls: ['./sckotio.component.less']
})
export class SckotioComponent implements OnInit {

  seach : boolean = true;
  seachValue : string = ''

  constructor() { }

  ngOnInit(): void {
  }

  // 搜索用户列表焦点获取事件
  getSeachUserInfo(){
    if(!this.seachValue){
      this.seach = !this.seach
    }
  }

}
