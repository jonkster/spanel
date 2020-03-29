import { Component, OnInit, ElementRef, ViewChild   } from '@angular/core';
import { GenericGaugeComponent  } from '../generic-gauge/generic-gauge.component';

@Component({
  selector: 'app-altimeter-gauge',
  templateUrl: './altimeter.svg',
  styleUrls: ['./altimeter-gauge.component.scss']
})
export class AltimeterGaugeComponent  extends GenericGaugeComponent {

	@ViewChild('hneedle', { static: false }) hneedle: ElementRef;
	@ViewChild('tneedle', { static: false }) tneedle: ElementRef;
	@ViewChild('ttneedle', { static: false }) ttneedle: ElementRef;

	constructor() {
		super();
		this.setPivots(368.5, 316.5);
	}

	ngAfterViewInit() {
		this.checkSVG();
		let i = 0;
		let dir = 1;
		let minangle = 0;
		let maxangle = 3600;
		this.setValue('hundreds', 0);
		this.setValue('thousands', 0);
		this.setValue('tenthousands', 0);
		if (this.activeSVG) {
			setInterval(()=>{
				this.setValue('hundreds', i);
				this.setValue('thousands', i/10);
				this.setValue('tenthousands', i/100);
				i += dir * 1; 
				if (i > maxangle) {
					dir = -1;
				} else if (i < minangle) {
					dir = 1;
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
		this.activeSVG = true;
	}

	setValue(name: string, value: number) {
		if (! this.activeSVG) {
			return;
		}
		let el = this.hneedle.nativeElement;
		if  (name === 'thousands') {
			el = this.tneedle.nativeElement;
		} else if  (name === 'tenthousands') {
			el = this.ttneedle.nativeElement;
		}
		let t = this.getNeedleInitialTransform(el);
		t += ' rotate(' + value + ',' + this.needleXpivot + ',' + this.needleYpivot + ')';
		el.setAttribute('transform', t);
	}

}
