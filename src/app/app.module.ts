import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { NgModule } from '@angular/core';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: 'http://localhost:51000', options: {
	origins: '*:*'
} };

import { AhGaugeComponent } from './ah-gauge/ah-gauge.component';
import { AltimeterGaugeComponent } from './altimeter-gauge/altimeter-gauge.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DiGaugeComponent } from './di-gauge/di-gauge.component';
import { GenericGaugeComponent } from './generic-gauge/generic-gauge.component';
import { ManualDataInputComponent } from './manual-data-input/manual-data-input.component';
import { PanelComponent } from './panel/panel.component';
import { TcGaugeComponent } from './tc-gauge/tc-gauge.component';
import { VsiGaugeComponent } from './vsi-gauge/vsi-gauge.component';

@NgModule({
	declarations: [
		AhGaugeComponent,
		AltimeterGaugeComponent,
		AppComponent,
		DiGaugeComponent,
		GenericGaugeComponent,
		ManualDataInputComponent,
		PanelComponent,
		TcGaugeComponent,
		VsiGaugeComponent
	],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		FormsModule,
		MatSliderModule,
    		SocketIoModule.forRoot(config)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
