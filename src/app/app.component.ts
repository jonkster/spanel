import { Component, ElementRef, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [
		// Each unique animation requires its own trigger. The first argument of the trigger function is the name
		trigger('rotatedState', [
		state('default', style({ transform: 'rotate(0)' })),
		state('rotated', style({ transform: 'rotate(-180deg)' })),
		transition('rotated => default', animate('1500ms ease-out')),
		transition('default => rotated', animate('400ms ease-in'))
	])
	]
})
export class AppComponent implements AfterViewInit {
	title = 'spanel';
	public insectX: number = 0;
	public insectY: number = 0;
	public state: string = 'default';

	ngAfterViewInit() {
		setInterval(()=>{
			if (Math.random() > 0.8) {
				this.insectX = Math.random() * 700;
				this.insectY = Math.random() * 700;
				this.state = (this.state === 'default' ? 'rotated' : 'default');
			}
		}, 1000 );
	}
}
