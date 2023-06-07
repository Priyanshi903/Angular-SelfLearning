import { Component, OnInit } from '@angular/core';

@Component({
  // selector as attribute:-
  // selector: '[app-servers]',

  // selector as class
  // selector: '.app-servers',

  selector: 'app-servers',

  // to write multiline strings use backticks
  // template: '<app-server></app-server>,<app-server></app-server>',

  templateUrl: './servers.component.html',

  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  userName = '';
  disaable = false;
  serverCreated = false;
  servers = ['TestServer1', 'TestServer2'];
  toggle = true;
  noOfToggles: number[] = [];
  logTimeStamp: Date[] = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server Created';
  }

  onUpdateServerName(event: any) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
    // console.log(this.serverName);
  }

  resetName() {

    this.userName = '';

  }

  toggleFunc() {
    this.toggle = this.toggle ? false : true;
    this.noOfToggles.push(this.noOfToggles.length + 1);
    this.logTimeStamp.push(new Date());
  }

}
