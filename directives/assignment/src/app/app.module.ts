import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CounterService } from 'src/app/counter.service';
import { ActiveUsersComponent } from './active-users/active-users.component';

import { AppComponent } from './app.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
