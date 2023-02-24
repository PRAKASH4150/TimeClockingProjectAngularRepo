import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateWagesComponent } from './calculate-wages.component';

describe('CalculateWagesComponent', () => {
  let component: CalculateWagesComponent;
  let fixture: ComponentFixture<CalculateWagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateWagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateWagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
