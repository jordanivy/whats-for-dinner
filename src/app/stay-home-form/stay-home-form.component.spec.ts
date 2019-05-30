import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StayHomeFormComponent } from './stay-home-form.component';

describe('StayHomeFormComponent', () => {
  let component: StayHomeFormComponent;
  let fixture: ComponentFixture<StayHomeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StayHomeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StayHomeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
