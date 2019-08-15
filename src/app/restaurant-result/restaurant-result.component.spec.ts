import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantResultComponent } from './restaurant-result.component';

describe('RestaurantResultComponent', () => {
  let component: RestaurantResultComponent;
  let fixture: ComponentFixture<RestaurantResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
