import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualDataInputComponent } from './manual-data-input.component';

describe('ManualDataInputComponent', () => {
  let component: ManualDataInputComponent;
  let fixture: ComponentFixture<ManualDataInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualDataInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualDataInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
