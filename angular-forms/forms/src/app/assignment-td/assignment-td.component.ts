import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment-td',
  templateUrl: './assignment-td.component.html',
  styleUrls: ['./assignment-td.component.css']
})
export class AssignmentTDComponent implements OnInit {

  // @ViewChild('assignmentForm') assignmentForm: NgForm;
  submitted = false;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription = 'Advanced';
  // defaultSubscription = this.subscriptions[1];
  user = {
    email: '',
    password: '',
    subscription: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  // we can also access form without ViewChild
  onSubmit(assignmentForm) {
    console.log(assignmentForm);
    this.submitted = true;
    this.user.email = assignmentForm.value.email;
    this.user.password = assignmentForm.value.password;
    this.user.subscription = assignmentForm.value.subscription;
  }

}
