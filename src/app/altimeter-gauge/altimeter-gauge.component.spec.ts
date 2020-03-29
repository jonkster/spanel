import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltimeterGaugeComponent } from './altimeter-gauge.component';

describe('AltimeterGaugeComponent', () => {
  let component: AltimeterGaugeComponent;
  let fixture: ComponentFixture<AltimeterGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltimeterGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltimeterGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
