import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: { id: number, name: string };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      // its fine to use snapshot for frst time accesssing the component
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };
    // subscribe is used for future event(asyn task) that may occur and it will happen only when the parameters changes
    // this is reqd when we r updating from the same component
    // params is observable here nd observable is used for asyn tasks
    // angular unsubscribes when the component is destroyed
    this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    )
  }


}
