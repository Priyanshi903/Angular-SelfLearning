import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  // now any element can access element property
  // @Input() element: { type: string, name: string, content: string };

  //  Binding through the alias
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;

  @ViewChild('heading') header: ElementRef;

  // to get content(html element) from another component passed by ng-content, as it is not in the server component so we cannot use @viewchild
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    // called before ngOninit, constructor and ngoninit called everytime component is called
    console.log('constructor called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('Text content in ngOnInit: ' + this.header.nativeElement.textContent);//its empty(here error)
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);//its empty(here error)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');

    console.log(changes);
    // output(without @Input name):-
    // element: SimpleChange ...............element is @input property of server-elements
    // currentValue: { type: "server", name: "Testserver", content: "Just a test" }
    // firstChange: true
    // previousValue: undefined

    // (after adding @Input name to trigger ngonchange)
    // name: SimpleChange
    // currentValue: "Name Changed"
    // firstChange: false
    // previousValue: "Testserver" .......notice

  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    // called only once as only one <ng-content>
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log('Text content in ngAfterViewInit: ' + this.header.nativeElement.textContent);//Text content in ngAfterViewInit: Testserver
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);//Text content of paragraph: Just a test
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }

}
