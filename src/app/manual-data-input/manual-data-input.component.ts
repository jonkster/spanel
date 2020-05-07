import { Component, OnInit } from '@angular/core';
import { FlightdataService } from '../services/flightdata.service';

@Component({
	selector: 'app-manual-data-input',
	templateUrl: './manual-data-input.component.html',
	styleUrls: ['./manual-data-input.component.scss']
})
export class ManualDataInputComponent implements OnInit {

	public ias: number = 100;
	public aob: number = 0;
	public pitch: number = 0;
	public alt: number = 2500;
	public qnh: number = 990;
	public tr: number = 0;
	public slip: number = 0;
	public hdg: number = 180;
	public vsi: number = 0;

	constructor(private flightDataService: FlightdataService) { }

	ngOnInit(): void {
		this.setData();
	}

	setData() {
		this.flightDataService.setNData('IAS', this.ias);
		this.flightDataService.setNData('aob', this.aob);
		this.flightDataService.setNData('pitch', this.pitch);
		this.flightDataService.setNData('alt', this.alt);
		this.flightDataService.setNData('qnh', this.qnh);
		this.flightDataService.setNData('tr', this.tr);
		this.flightDataService.setNData('slip', this.slip);
		this.flightDataService.setNData('hdg', this.hdg);
		this.flightDataService.setNData('vsi', this.vsi);
	}

}
