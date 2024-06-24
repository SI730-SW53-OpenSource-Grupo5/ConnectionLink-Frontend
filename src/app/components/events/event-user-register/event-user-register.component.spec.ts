import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventUserRegisterComponent } from './event-user-register.component';

describe('EventUserRegisterComponent', () => {
  let component: EventUserRegisterComponent;
  let fixture: ComponentFixture<EventUserRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventUserRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventUserRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
