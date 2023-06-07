// angular is hirerchical injector of service, if we provide service in components , it will inject different instances of services to these components
// AppModule:Same instance of service is available application wide.
// AppComponent:Same instance of service is available for all components(but not for other services)
// Any other Component:Same instance of service is available for the component and all its child components

import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

// added to the service where we want to inject something, not to the service that we want to inject, therefore not reqd. in Loggingservice, here we r injecting Loggingservice, therefore reqd.
@Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'Master account',
      status: 'active'
    },
    {
      name: 'Test account',
      status: 'inactive'
    },
    {
      name: 'Hidden account',
      status: 'unknown'
    },
  ];

  // communication between components using service
  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) { }

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
    this.loggingService.logStatusChange(status);
  }

  changeStatus(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
    this.loggingService.logStatusChange(newStatus);
  }

}

// you can provide application-wide services in a different way.

// Instead of adding a service class to the providers[]  array in AppModule , you can set the following config in @Injectable() :

// @Injectable({providedIn: 'root'})
// export class MyService { ... }
// This is exactly the same as:

// export class MyService { ... }
// and

// import { MyService } from './path/to/my.service';

// @NgModule({
//     ...
//     providers: [MyService]
// })
// export class AppModule { ... }
// Using this syntax is completely optional, the traditional syntax (using providers[] ) will also work.

// The "new syntax" does offer one advantage though: Services can be loaded lazily by Angular (behind the scenes) and redundant code can be removed automatically. This can lead to a better performance and loading speed - though this really only kicks in for bigger services and apps in general.
