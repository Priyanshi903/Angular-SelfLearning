import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // injecting service:-
  // providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {

  // anything added to the parameter of constructor with private specifier becomes the property of the class
  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {

    // recieving event in new-account
    accountsService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    );

  }

  ngOnInit(): void {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);

    // console.log('A server status changed, new status:' + accountStatus);
    // this.loggingService.logStatusChange(accountStatus);//injecting service into service, therefore not reqd. now
  }

}
