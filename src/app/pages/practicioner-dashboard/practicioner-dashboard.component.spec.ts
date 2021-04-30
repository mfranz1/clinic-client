import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticionerDashboardComponent } from './practicioner-dashboard.component';

describe('PracticionerDashboardComponent', () => {
  let component: PracticionerDashboardComponent;
  let fixture: ComponentFixture<PracticionerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticionerDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticionerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
