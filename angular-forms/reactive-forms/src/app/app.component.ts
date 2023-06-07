import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactive-forms';

  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUserNames = ['Priya', 'Bittu'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      // (initial value,single/array of validators,potential asyn validators)
      // 'email': new FormControl('abc@gmail.com'),
      'userData': new FormGroup({
        // bind is reqd becz angular is calling it, therefore 'this' refers to angular nd we need to bind 'this' to this class
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
    });

    // setting patchValues, setValue also available
    this.signupForm.patchValue({
      'userData': {
        'username': 'Priyanshi',
      }
    });

    // reacting to status change
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );

    // reacting to value change
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
  }

  onSubmit() {
    console.log(this.signupForm);

    // we can pass an object to reset() to reset to specific values
    // this.signupForm.controls[email].reset();
    this.signupForm.controls['gender'].reset();
    // this.signupForm.get('userData.email').reset();

    // this.signupForm.reset();
  }

  // arrays of form controls
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  // custom validator
  // returns object(key-value)
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    // if element not present in array, it will return -1
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true };
    }
    return null;
  }

  // custom async validator
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'cts@gmail.com') {
          resolve({ 'emailIsForbidden': true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
