import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsRegisteredListComponent } from './events-registered-list.component';

describe('EventsRegisteredListComponent', () => {
  let component: EventsRegisteredListComponent;
  let fixture: ComponentFixture<EventsRegisteredListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsRegisteredListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventsRegisteredListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
