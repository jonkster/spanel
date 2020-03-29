import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericGaugeComponent } from './generic-gauge.component';

describe('GenericGaugeComponent', () => {
  let component: GenericGaugeComponent;
  let fixture: ComponentFixture<GenericGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
