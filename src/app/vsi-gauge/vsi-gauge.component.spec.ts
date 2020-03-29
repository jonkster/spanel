import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VsiGaugeComponent } from './vsi-gauge.component';

describe('VsiGaugeComponent', () => {
  let component: VsiGaugeComponent;
  let fixture: ComponentFixture<VsiGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VsiGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VsiGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
