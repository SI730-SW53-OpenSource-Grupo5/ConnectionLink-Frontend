import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEventRegisterComponent } from './modal-event-register.component';

describe('ModalEventRegisterComponent', () => {
  let component: ModalEventRegisterComponent;
  let fixture: ComponentFixture<ModalEventRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEventRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalEventRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
