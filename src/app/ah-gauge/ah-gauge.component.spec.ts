import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhGaugeComponent } from './ah-gauge.component';

describe('AhGaugeComponent', () => {
  let component: AhGaugeComponent;
  let fixture: ComponentFixture<AhGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
