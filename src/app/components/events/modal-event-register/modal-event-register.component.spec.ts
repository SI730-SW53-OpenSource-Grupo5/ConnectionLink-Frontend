
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewEventComponent } from './modal-event-register.component';

describe('ModalEventregister', () => {
  let component: CreateNewEventComponent;
  let fixture: ComponentFixture<CreateNewEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNewEventComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreateNewEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
