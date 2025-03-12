import { Component } from "@angular/core";

@Component({
    selector: 'server-event-binding-demo',
    templateUrl: './server-event-binding-demo.html',
    styleUrls: ['./server-event-binding-demo.css']
})

export class ServerEventBindingDemo{
    serverName = 'No Server Created Yet!!';
    serverCreatedStatus = this.serverName;

    // We can keep any, Event, and InputEvent but if we will use Event then we can not use event.data
    onUpdateServerName(event : InputEvent) {
        console.log(event);
        console.log(event.data);
        this.serverName = (<HTMLInputElement>event.target).value;
    }

    onCreateServer() {
       this.serverCreatedStatus =  'Server Created with name = ' + this.serverName;
    }

}