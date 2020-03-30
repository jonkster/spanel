import { Component, OnInit } from '@angular/core';
import { GenericGaugeComponent  } from '../generic-gauge/generic-gauge.component';
import { AltimeterGaugeComponent  } from '../altimeter-gauge/altimeter-gauge.component';
import { VsiGaugeComponent  } from '../vsi-gauge/vsi-gauge.component';
import { AhGaugeComponent  } from '../ah-gauge/ah-gauge.component';
import { DiGaugeComponent  } from '../di-gauge/di-gauge.component';
import { TcGaugeComponent  } from '../tc-gauge/tc-gauge.component';

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
