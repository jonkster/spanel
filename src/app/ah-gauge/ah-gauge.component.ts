import { Component, OnInit, ElementRef, ViewChild   } from '@angular/core';
import { GenericGaugeComponent  } from '../generic-gauge/generic-gauge.component';

@Component({
	selector: 'app-ah-gauge',
	templateUrl: './ah.svg',
	styleUrls: ['./ah-gauge.component.scss']
})
export class AhGaugeComponent extends GenericGaugeComponent {

	@ViewChild('ball', { static: false }) ball: ElementRef;
	@ViewChild('pointer', { static: false }) pointer: ElementRef;
	@ViewChild('caged', { static: false }) caged: ElementRef;

	constructor() {
		super();
		this.setPivots(210, 208);
	}

	ngOnInit(): void {
	}

	ngAfterViewInit() {
		this.checkSVG();
		let i = 0;
		let dir = 1;
		let minangle = -70;
		let maxangle = 70;
		this.setValue('bank', 0);
		if (this.activeSVG) {
			setInterval(()=>{
				this.setValue('bank', i);
				this.setValue('pointer', i);
				if ((i > 0) && (i < 30)) {
					this.setValue('caged', i);
				}
				i += dir * 0.8; 
				if (i > maxangle) {
					dir = -1;
				} else if (i < minangle) {
					dir = 1;
				}
			}, 20);
		} else {
			alert("no moveable part in AH SVG");
		}
	}

	checkSVG() {
		if (this.ball === undefined) {
			return;
		}
		this.setNeedleInitialTransform(this.ball);
		if (this.pointer === undefined) {
			return;
		}
		this.setNeedleInitialTransform(this.pointer);
		if (this.caged === undefined) {
			return;
		}
		this.setNeedleInitialTransform(this.caged);
		this.activeSVG = true;
	}

	setValue(name: string, value: number) {
		let x0 = 0;
		let y0 = 0;
		if (! this.activeSVG) {
			return;
		}
		let el = this.ball.nativeElement;
		if (name === 'caged') {
			el = this.caged.nativeElement;
			x0 = 201;
		} else if (name === 'pointer') {
			el = this.pointer.nativeElement;
			x0 = 0;
		}
		let t = this.getNeedleInitialTransform(el);
		t += ' rotate(' + value + ',' + (this.needleXpivot + x0) + ',' + (this.needleYpivot + y0) + ')';
		el.setAttribute('transform', t);
	}

}
