import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredModalComponent } from './registered-modal.component';

describe('RegisteredModalComponent', () => {
  let component: RegisteredModalComponent;
  let fixture: ComponentFixture<RegisteredModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisteredModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisteredModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
