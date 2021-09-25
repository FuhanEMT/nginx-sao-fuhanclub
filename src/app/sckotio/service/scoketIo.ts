import { Injectable } from '@angular/core'
import { observable, Observable , Subject } from 'rxjs'
import { io } from 'socket.io-client'

@Injectable()
export class ChatService {
    private url = "http://localhost:4000";
    private socket: any;

    sendMessage(message : any) {
        this.socket.emit('add-message' , message)
    }

    getMessages(): Observable<any>{
        return new Observable(observer => {
            this.socket = io(this.url , { withCredentials: true });
            this.socket.on('message' , (data:any) => {
                observer.next(data)
            })

            return () => {
                this.socket.disconnect()
            }
        })
    }
}