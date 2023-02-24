import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewByDatesComponent } from './view-by-dates.component';

describe('ViewByDatesComponent', () => {
  let component: ViewByDatesComponent;
  let fixture: ComponentFixture<ViewByDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewByDatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewByDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
