import { Component, OnInit, ElementRef, ViewChild   } from '@angular/core';
import { GenericGaugeComponent  } from '../generic-gauge/generic-gauge.component';
import { FlightdataService } from '../services/flightdata.service';
import { XplaneDataService } from '../services/xplane-data.service';

@Component({
  selector: 'app-altimeter-gauge',
	templateUrl: './altimeter.svg',
  styleUrls: ['./altimeter-gauge.component.scss']
})
export class AltimeterGaugeComponent  extends GenericGaugeComponent {

	@ViewChild('hneedle', { static: false }) hneedle: ElementRef;
	@ViewChild('tneedle', { static: false }) tneedle: ElementRef;
	@ViewChild('ttneedle', { static: false }) ttneedle: ElementRef;
	@ViewChild('qnhneedle', { static: false }) qnhneedle: ElementRef;

	constructor(protected flightDataService: FlightdataService, private xplaneDataService: XplaneDataService ) {
		super(flightDataService);
		this.setPivots(175, 165);
	}

	ngAfterViewInit() {
		this.checkSVG();
		let i = 0;
		let q = 0;
		let dir = 1;
		let qdir = -1;
		let minangle = 0;
		let maxangle = 3600;
		let minqnh = -90;
		let maxqnh = 0;
		this.setRawValue('hundreds', 0);
		this.setRawValue('thousands', 0);
		this.setRawValue('tenthousands', 0);
		this.setRawValue('qnh', 0);
		if (this.activeSVG) {
			setInterval(()=>{
				if (this.testMode) {
					this.setRawValue('hundreds', i);
					this.setRawValue('thousands', i/10);
					this.setRawValue('tenthousands', i/100);
					this.setRawValue('qnh', q);
					i += dir * 1; 
					if (i > maxangle) {
						dir = -1;
					} else if (i < minangle) {
						dir = 1;
					}
					q += qdir * 1; 
					if (q > maxqnh) {
						qdir = -1;
					} else if (q < minqnh) {
						qdir = 1;
					}
				} else {
					let alt = this.flightDataService.getNData('alt');
					let hundreds = this.mapRealToRaw(alt);

					this.setRawValue('hundreds', hundreds);
					this.setRawValue('thousands', hundreds/10);
					this.setRawValue('tenthousands', hundreds/100);

					let qnh = this.flightDataService.getNData('qnh');
					let q = -(qnh - 990) * 1.2;
					this.setRawValue('qnh', q);
				}
			}, 20);
		} else {
			alert("no moveable part in altimeter SVG");
		}
	}

	checkSVG() {
		if (this.hneedle === undefined) {
			return;
		}
		this.setNeedleInitialTransform(this.hneedle);
		if (this.tneedle === undefined) {
			return;
		}
		this.setNeedleInitialTransform(this.tneedle);
		if (this.ttneedle === undefined) {
			return;
		}
		this.setNeedleInitialTransform(this.ttneedle);
		if (this.qnhneedle === undefined) {
			return;
		}
		this.setNeedleInitialTransform(this.qnhneedle);
		this.activeSVG = true;
	}

	mapRealToRaw(value: number) : number {
		let real = value;
		real = (value / 1000) * 360;
		return real;
	}

	setRawValue(name: string, value: number) {
		let x0 = 0;
		let y0 = 0;
		if (! this.activeSVG) {
			return;
		}
		let el = this.hneedle.nativeElement;
		if  (name === 'thousands') {
			el = this.tneedle.nativeElement;
		} else if  (name === 'tenthousands') {
			el = this.ttneedle.nativeElement;
		} else if  (name === 'qnh') {
			el = this.qnhneedle.nativeElement;
			x0 = 6;
			y0 = -11;
		}
		let t = this.getNeedleInitialTransform(el);
		t += ' rotate(' + value + ',' + (this.needleXpivot + x0) + ',' + (this.needleYpivot + y0) + ')';
		el.setAttribute('transform', t);
	}

}
