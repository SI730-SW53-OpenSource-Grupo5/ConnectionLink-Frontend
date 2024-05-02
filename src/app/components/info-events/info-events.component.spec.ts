import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEventsComponent } from './info-events.component';

describe('InfoEventsComponent', () => {
  let component: InfoEventsComponent;
  let fixture: ComponentFixture<InfoEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
