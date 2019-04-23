import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickUpButtonComponent } from './pick-up-button.component';

describe('PickUpButtonComponent', () => {
  let component: PickUpButtonComponent;
  let fixture: ComponentFixture<PickUpButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickUpButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickUpButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
