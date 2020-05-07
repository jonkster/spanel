import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { GenericGaugeComponent  } from '../generic-gauge/generic-gauge.component';
import { FlightdataService } from '../services/flightdata.service';

@Component({
	selector: 'app-vsi-gauge',
	templateUrl: './vsi.svg',
	styleUrls: ['./vsi-gauge.component.scss']
})
export class VsiGaugeComponent extends GenericGaugeComponent{

	@ViewChild('needle', { static: false }) needle: ElementRef;

	private mask: ElementRef;

	constructor(protected flightDataService: FlightdataService) {
		super(flightDataService);
		this.setPivots(322.5, 113.5);
	}

	ngOnInit(): void {
	}

	ngAfterViewInit() {
		this.checkSVG();
		let i = 0;
		let dir = 1;
		let minangle = -170;
		let maxangle = 170;
		this.setRawValue('vsi', 0);
		if (this.activeSVG) {
			setInterval(()=>{
				if (this.testMode) {
					this.setRawValue('vsi', i);
					i += dir * 1.3; 
					if (i > maxangle) {
						dir = -1;
					} else if (i < minangle) {
						dir = 1;
					}
				} else {
					let v = this.flightDataService.getNData('vsi');
					let a = -1.2608763207794;
					let b = 0.0425530317105873;
					let c = -3.48442620671097e-08;
					let d = -3.87573618006862e-10;
					let e = 1.24968e-16
					v = a + b*v + c*Math.pow(v,2) + d*Math.pow(v,3) + e * Math.pow(v,4) ;
					this.setRawValue('vsi', v);

				}
			}, 20);
		} else {
			alert("no moveable part in vsi SVG");
		}
	}

}

