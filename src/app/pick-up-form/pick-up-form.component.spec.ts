import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickUpFormComponent } from './pick-up-form.component';

describe('PickUpFormComponent', () => {
  let component: PickUpFormComponent;
  let fixture: ComponentFixture<PickUpFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickUpFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
