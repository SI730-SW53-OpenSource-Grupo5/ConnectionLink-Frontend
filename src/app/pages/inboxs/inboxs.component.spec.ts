import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxsComponent } from './inboxs.component';

describe('InboxsComponent', () => {
  let component: InboxsComponent;
  let fixture: ComponentFixture<InboxsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InboxsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InboxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
