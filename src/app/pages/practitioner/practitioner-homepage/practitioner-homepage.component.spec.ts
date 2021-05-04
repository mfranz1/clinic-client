import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionerHomepageComponent } from './practitioner-homepage.component';

describe('PractitionerHomepageComponent', () => {
  let component: PractitionerHomepageComponent;
  let fixture: ComponentFixture<PractitionerHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PractitionerHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PractitionerHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
