import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorCredentialsModalComponent } from './error-credentials-modal.component';

describe('ErrorCredentialsModalComponent', () => {
  let component: ErrorCredentialsModalComponent;
  let fixture: ComponentFixture<ErrorCredentialsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorCredentialsModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorCredentialsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
