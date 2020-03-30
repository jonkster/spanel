import { Component, OnInit, ElementRef, ViewChild   } from '@angular/core';
import { GenericGaugeComponent  } from '../generic-gauge/generic-gauge.component';

@Component({
  selector: 'app-tc-gauge',
  templateUrl: './tc.svg',
  styleUrls: ['./tc-gauge.component.scss']
})
export class TcGaugeComponent extends GenericGaugeComponent {
	@ViewChild('slipneedle', { static: false }) slipneedle: ElementRef;
	@ViewChild('turnneedle', { static: false }) turnneedle: ElementRef;

	constructor() {
		super();
		this.setPivots(180,360);
	}

	ngOnInit(): void {
	}

	ngAfterViewInit() {
		this.checkSVG();
		let t = 0;
		let dir = 1;
		let minangle = -40;
		let maxangle = 40;
		let s = 0;
		let sdir = -1;
		let minsangle = -40;
		let maxsangle = 40;
		this.setValue('turn', 0);
		this.setValue('slip', 0);
		if (this.activeSVG) {
			setInterval(()=>{
				this.setValue('turn', t);
				this.setValue('slip', s);
				t += dir * 0.7; 
				if (t > maxangle) {
					dir = -1;
				} else if (t < minangle) {
					dir = 1;
				}
				s += sdir * 0.3; 
				if (s > maxsangle) {
					sdir = -1;
				} else if (s < minsangle) {
					sdir = 1;
				}
			}, 20);
		} else {
			alert("no moveable part in TC SVG");
		}
	}

	checkSVG() {
		if (this.slipneedle === undefined) {
			return;
		}
		this.setNeedleInitialTransform(this.slipneedle);
		if (this.turnneedle === undefined) {
			return;
		}
		this.setNeedleInitialTransform(this.turnneedle);
		this.activeSVG = true;
	}

	setValue(name: string, value: number) {
		let x0 = 0;
		let y0 = 0;
		if (! this.activeSVG) {
			return;
		}
		let el = null;
		if (name === 'turn') {
			el = this.turnneedle.nativeElement;
		} else if (name === 'slip') {
			el = this.slipneedle.nativeElement;
		}
		let t = this.getNeedleInitialTransform(el);
		t += ' rotate(' + value + ',' + (this.needleXpivot + x0) + ',' + (this.needleYpivot + y0) + ')';
		el.setAttribute('transform', t);
	}

}
