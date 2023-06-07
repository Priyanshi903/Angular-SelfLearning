import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';

  // getting access to the template using @viewchild
  @ViewChild('viewchild') viewchild;
  // @ViewChild('viewchild') viewchild:ElementRef;

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  // alias to custom events
  @Output('bluprintCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreated.emit({ serverName: this.newServerName, serverContent: this.newServerContent })
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({ serverName: this.newServerName, serverContent: this.newServerContent })
  }

  locaRef(ref) {
    console.log(ref);//<input _ngcontent-tla-c43 type="text">
    console.log(ref.value);//priya
  }
  // locaRef(ref: HTMLInputElement) {
  //   console.log(ref.value);//<input _ngcontent-tla-c43 type="text">
  //   console.log(ref);//priya
  // }

  viewChildFunc(viewchild) {
    console.log(this.viewchild);//ElementRef {nativeElement: input}
    console.log(this.viewchild.nativeElement.value);//priya
  }

}
