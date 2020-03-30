import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiGaugeComponent } from './di-gauge.component';

describe('DiGaugeComponent', () => {
  let component: DiGaugeComponent;
  let fixture: ComponentFixture<DiGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
