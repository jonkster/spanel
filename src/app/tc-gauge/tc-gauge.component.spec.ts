import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcGaugeComponent } from './tc-gauge.component';

describe('TcGaugeComponent', () => {
  let component: TcGaugeComponent;
  let fixture: ComponentFixture<TcGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
