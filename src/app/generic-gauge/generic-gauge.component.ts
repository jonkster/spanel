import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FlightdataService } from '../services/flightdata.service';

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
	public testMode: boolean = false;

	constructor(protected flightDataService: FlightdataService) {
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
				if (this.testMode) {
					this.setRawValue('rpm', i);
					i += dir * 1; 
					if (i > maxangle) {
						dir = -1;
					} else if (i < minangle) {
						dir = 1;
					}
				} else {
					let ias = this.flightDataService.getNData('IAS');
					this.setRawValue('ias', this.mapRealToRaw(ias));
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

	mapRealToRaw(value: number) : number {
		let a = -140.538241174766;
		let b = 2.2657976954343;
		let c = -0.00153616542766579;
		if (value <= 100) {
			a = 0.0648013405840844;
			b = -0.045956349825489;
			c = 0.00868194549424087;
		}
		else if (value <= 200) {
			a = -68.3647496408914;
			b = 1.34973514075744;
			c = 0.0012895248866439;
		}
		let real = value;
		real = (value*value*c) + (value * b) + a;
		return real;
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

	setRawValue(name: string, value: number) {
		if (! this.activeSVG) {
			return;
		}
		let el = this.needle.nativeElement;
		let t = this.getNeedleInitialTransform(el);
		t += ' rotate(' + value + ',' + this.needleXpivot + ',' + this.needleYpivot + ')';
		el.setAttribute('transform', t);
	}


}
