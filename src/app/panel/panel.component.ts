import { Component, OnInit } from '@angular/core';
import { GenericGaugeComponent  } from '../generic-gauge/generic-gauge.component';
import { AltimeterGaugeComponent  } from '../altimeter-gauge/altimeter-gauge.component';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
