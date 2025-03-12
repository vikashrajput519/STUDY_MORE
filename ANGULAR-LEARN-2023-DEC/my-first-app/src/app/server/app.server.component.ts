import { Component, OnInit } from "@angular/core";



@Component({
    selector: 'app-server',
    // selector: '[app-server]',
    // selector: '.app-server',
    templateUrl: './app.server.component.html',
    styleUrls: ['./app.server.component.css']

})

export class AppServerComponent {
  serverName = 'Test Server';
  createdServerName = 'Server Not created Yet!';

  onClickCreateServer() {
    this.createdServerName = 'Server Created with name = '+this.serverName;
  }
}