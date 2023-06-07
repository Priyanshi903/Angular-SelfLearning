import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidator } from '../custom-validator';

@Component({
  selector: 'app-assignment-reactive',
  templateUrl: './assignment-reactive.component.html',
  styleUrls: ['./assignment-reactive.component.css']
})
export class AssignmentReactiveComponent implements OnInit {

  projectForm: FormGroup;
  projectStatus = ['Stable', 'Critical', 'Finished'];

  constructor() { }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, CustomValidator.forbiddenProjectNameCheck],
        CustomValidator.forbiddenProjectNameCheckAsync),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('Critical')
    });

  }

  onSubmit() {
    console.log(this.projectForm.value);
    // console.log(this.projectForm);
  }
}
