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

	private pitchA: number = 0;
	private bankA: number = 0;

	constructor() {
		super();
		this.setPivots(210, 208);
	}

	ngOnInit(): void {
	}

	ngAfterViewInit() {
		this.checkSVG();
		let b = 0;
		let dir = 1;
		let minangle = -70;
		let maxangle = 70;
		let p = 0;
		let pdir = 1;
		let minpangle = -70;
		let maxpangle = 70;
		this.setValue('bank', 0);
		this.setValue('pointer', 0);
		this.setValue('pitch', 0);
		if (this.activeSVG) {
			setInterval(()=>{
				this.setValue('bank', b);
				this.setValue('pointer', b);
				this.bankA = b;
				this.pitchA = p;
				if ((b > 0) && (b < 30)) {
					this.setValue('caged', b);
				}
				b += dir * 0.8; 
				if (b > maxangle) {
					dir = -1;
				} else if (b < minangle) {
					dir = 1;
				}
				p += pdir * 0.5; 
				if (p > maxpangle) {
					pdir = -1;
				} else if (p < minpangle) {
					pdir = 1;
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
		let el = null;
		if (name === 'caged') {
			el = this.caged.nativeElement;
			x0 = 201;
		} else if (name === 'pointer') {
			el = this.pointer.nativeElement;
			x0 = 0;
		} else if ((name === 'bank') || (name === 'pitch')) {
			el = this.ball.nativeElement;
			let t = this.getNeedleInitialTransform(el);
			t += ' rotate(' + this.bankA + ',' + (this.needleXpivot + x0) + ',' + (this.needleYpivot + y0) + ')';
			t += ' translate(0, ' + this.pitchA + ')';
			el.setAttribute('transform', t);
			return;
		} else {
			return;
		}
		let t = this.getNeedleInitialTransform(el);
		t += ' rotate(' + value + ',' + (this.needleXpivot + x0) + ',' + (this.needleYpivot + y0) + ')';
		el.setAttribute('transform', t);

	}

}
