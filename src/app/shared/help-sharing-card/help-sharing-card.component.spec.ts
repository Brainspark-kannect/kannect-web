import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpSharingCardComponent } from './help-sharing-card.component';

describe('HelpSharingCardComponent', () => {
  let component: HelpSharingCardComponent;
  let fixture: ComponentFixture<HelpSharingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelpSharingCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelpSharingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
