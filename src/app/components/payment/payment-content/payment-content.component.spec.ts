import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentContentComponent } from './payment-content.component';

describe('PaymentContentComponent', () => {
  let component: PaymentContentComponent;
  let fixture: ComponentFixture<PaymentContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
