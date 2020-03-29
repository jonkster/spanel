import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-generic-gauge',
	templateUrl: './generic-gauge.svg',
	styleUrls: ['./generic-gauge.component.scss']
})
export class GenericGaugeComponent implements OnInit, AfterViewInit {

	@ViewChild('needle', { static: false }) needle: ElementRef;
	public needleXpivot: number = 0;
	public needleYpivot: number = 0;
	public activeSVG: boolean = false;
	public needleTransforms: {[el : string] : string} = {};

	constructor() {
		this.setPivots(337, 427);
	}

	ngOnInit(): void {
	}

	ngAfterViewInit() {
		this.checkSVG();
		let i = 0;
		let dir = 1;
		let minangle = 0;
		let maxangle = 620;
		if (this.activeSVG) {
			setInterval(()=>{
				this.setValue('rpm', i);
				i += dir * 1; 
				if (i > maxangle) {
					dir = -1;
				} else if (i < minangle) {
					dir = 1;
				}
			}, 25);
		} else {
			alert("no moveable part in generic SVG");
		}
	}

	checkSVG() {
		if (this.needle === undefined) {
			return;
		}
		this.setNeedleInitialTransform(this.needle);
		this.activeSVG = true;
	}

	getNeedleInitialTransform(nel: any): string {
		let id = nel.getAttribute('id');
		let t = this.needleTransforms[id];
		if ((t === undefined) || (t === null)) {
			t = "";
		}
		return t;
	}

	setNeedleInitialTransform(el: ElementRef) {
		let nel = el.nativeElement;
		let t = nel.getAttribute('transform');
		let id = nel.getAttribute('id');
		this.needleTransforms[id] = t;
	}


	setPivots(x : number, y: number) {
		this.needleXpivot = x;
		this.needleYpivot = y;
	}

	setValue(name: string, value: number) {
		if (! this.activeSVG) {
			return;
		}
		let el = this.needle.nativeElement;
		let t = this.getNeedleInitialTransform(el);
		t += ' rotate(' + value + ',' + this.needleXpivot + ',' + this.needleYpivot + ')';
		el.setAttribute('transform', t);
	}

}
