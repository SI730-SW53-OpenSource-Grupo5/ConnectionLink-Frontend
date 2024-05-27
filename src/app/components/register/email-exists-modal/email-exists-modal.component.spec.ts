import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailExistsModalComponent } from './email-exists-modal.component';

describe('EmailExistsModalComponent', () => {
  let component: EmailExistsModalComponent;
  let fixture: ComponentFixture<EmailExistsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailExistsModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailExistsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
