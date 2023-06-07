// we need to register new component in app.module.ts

import { Component } from "@angular/core";

// The @Component decorator identifies the class immediately below it as a component class, and specifies its metadata
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  .online{
    color:white;
  }`]
})



export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
