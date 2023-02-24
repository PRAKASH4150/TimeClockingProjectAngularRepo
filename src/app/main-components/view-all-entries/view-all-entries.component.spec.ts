import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllEntriesComponent } from './view-all-entries.component';

describe('ViewAllEntriesComponent', () => {
  let component: ViewAllEntriesComponent;
  let fixture: ComponentFixture<ViewAllEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllEntriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
