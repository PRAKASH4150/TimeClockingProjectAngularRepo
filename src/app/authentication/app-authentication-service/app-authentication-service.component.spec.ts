import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAuthenticationServiceComponent } from './app-authentication-service.component';

describe('AppAuthenticationServiceComponent', () => {
  let component: AppAuthenticationServiceComponent;
  let fixture: ComponentFixture<AppAuthenticationServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAuthenticationServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAuthenticationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
