import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentTDComponent } from './assignment-td.component';

describe('AssignmentTDComponent', () => {
  let component: AssignmentTDComponent;
  let fixture: ComponentFixture<AssignmentTDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentTDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentTDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
