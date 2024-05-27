import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeDateAppoinmentComponent } from './make-date-appoinment.component';

describe('MakeDateAppoinmentComponent', () => {
  let component: MakeDateAppoinmentComponent;
  let fixture: ComponentFixture<MakeDateAppoinmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakeDateAppoinmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MakeDateAppoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
