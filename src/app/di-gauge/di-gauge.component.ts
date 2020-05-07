import { Component, OnInit, ElementRef, ViewChild   } from '@angular/core';
import { GenericGaugeComponent  } from '../generic-gauge/generic-gauge.component';
import { FlightdataService } from '../services/flightdata.service';

@Component({
  selector: 'app-di-gauge',
  templateUrl: './di.svg',
  styleUrls: ['./di-gauge.component.scss']
})
export class DiGaugeComponent  extends GenericGaugeComponent {

	@ViewChild('tape', { static: false }) tape: ElementRef;

	constructor(protected flightDataService: FlightdataService) {
		super(flightDataService);
		this.setPivots(210, 208);
	}

	ngOnInit(): void {
	}

	ngAfterViewInit() {
		this.checkSVG();
		if (this.activeSVG) {
			let d = 0;
			let dir = 1;
			let minangle = -180;
			let maxangle = 180;
			setInterval(()=>{
				if (this.testMode) {
					this.setRawValue('hdg', d);
					d += dir * 0.8; 
					if (d > maxangle) {
						dir = -1;
					} else if (d < minangle) {
						dir = 1;
					}
				} else {
					let h = this.flightDataService.getNData('hdg') - 270;

					h += 360;
					if (h > 330) {
						h -= 360;
					}
					this.setRawValue('hdg', (-2.6 * h));
				}
			}, 20);
		} else {
			alert("no moveable part in DI SVG");
		}
	}

	checkSVG() {
		if (this.tape === undefined) {
			return;
		}
		this.setNeedleInitialTransform(this.tape);
		this.activeSVG = true;
	}

	setRawValue(name: string, value: number) {
		let x0 = 0;
		let y0 = 0;
		if (! this.activeSVG) {
			return;
		}
		let el = null;
		el = this.tape.nativeElement;
		let t = this.getNeedleInitialTransform(el);
		t += ' translate(' + value + ', 0)';
		el.setAttribute('transform', t);
	}

}
