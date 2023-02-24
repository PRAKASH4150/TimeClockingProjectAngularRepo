import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationNavbarComponent } from './application-navbar.component';

describe('ApplicationNavbarComponent', () => {
  let component: ApplicationNavbarComponent;
  let fixture: ComponentFixture<ApplicationNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
