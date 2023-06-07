import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'Testserver', content: 'Just a test' }];
  title = 'learn-angular';

  // assignment
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });

  }

  onChangeFirst() {

    // when we are adding first object to the serverElements it will not trigger ngonchange becz element is passed as the Object
    // and it is of reference type , therefore serverElements of both the components refer to the same location , thats why we need to change the name to look ngonchange hook

    // accessing first element and changing it for ngOnChange
    this.serverElements[0].name = 'Name Changed';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

  onIntervalfired(firedNumber: number) {
    // console.log(firedNumber);
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    }
    else {
      this.oddNumbers.push(firedNumber);
    }
  }

}
