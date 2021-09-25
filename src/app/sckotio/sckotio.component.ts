import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client'

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
    const socket = io('http://localhost:4000',{ withCredentials: true })
    console.log(socket)
  }

  // 搜索用户列表焦点获取事件
  getSeachUserInfo(){
    if(!this.seachValue){
      this.seach = !this.seach
    }
  }

  // 键盘回车事件
  getKeyDownDataOpen(){
    
  }

}
