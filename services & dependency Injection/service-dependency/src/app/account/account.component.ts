import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // dont add Accountservice in providers as we need only 1 instance of accountservice across all the components
  // providers: [LoggingService]
})
export class AccountComponent implements OnInit {

  @Input() account: { name: string, status: string };
  @Input() id: number;

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) { }

  ngOnInit(): void {
  }

  onSetTo(status: string) {
    this.accountsService.changeStatus(this.id, status);
    // console.log('server status changed, new status: ' + status);

    // this.loggingService.logStatusChange(status); //injecting service into service, therefore not reqd. now

    // emitting an event on status update from account and recieved in new-account
    this.accountsService.statusUpdated.emit(status);

  }

}
