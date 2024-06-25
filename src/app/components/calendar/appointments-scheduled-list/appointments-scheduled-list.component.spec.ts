import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsScheduledListComponent } from './appointments-scheduled-list.component';

describe('AppointmentsScheduledListComponent', () => {
  let component: AppointmentsScheduledListComponent;
  let fixture: ComponentFixture<AppointmentsScheduledListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentsScheduledListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointmentsScheduledListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
