import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { GenericGaugeComponent  } from '../generic-gauge/generic-gauge.component';

@Component({
	selector: 'app-vsi-gauge',
	templateUrl: './vsi.svg',
	styleUrls: ['./vsi-gauge.component.scss']
})
export class VsiGaugeComponent extends GenericGaugeComponent{

	@ViewChild('needle', { static: false }) needle: ElementRef;

	private mask: ElementRef;

	constructor() {
		super();
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
		this.setValue('vsi', 0);
		if (this.activeSVG) {
			setInterval(()=>{
				this.setValue('vsi', i);
				i += dir * 1.3; 
				if (i > maxangle) {
					dir = -1;
				} else if (i < minangle) {
					dir = 1;
				}
			}, 20);
		} else {
			alert("no moveable part in vsi SVG");
		}
	}

}

