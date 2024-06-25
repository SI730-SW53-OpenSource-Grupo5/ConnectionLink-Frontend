import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillFormModalComponent } from './fill-form-modal.component';

describe('FillFormModalComponent', () => {
  let component: FillFormModalComponent;
  let fixture: ComponentFixture<FillFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FillFormModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FillFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
