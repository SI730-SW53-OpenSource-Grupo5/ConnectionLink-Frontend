import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateAppoinmentsComponent } from './date-appoinments.component';

describe('DateAppoinmentsComponent', () => {
  let component: DateAppoinmentsComponent;
  let fixture: ComponentFixture<DateAppoinmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateAppoinmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DateAppoinmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
