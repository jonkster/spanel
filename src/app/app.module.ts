import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericGaugeComponent } from './generic-gauge/generic-gauge.component';
import { PanelComponent } from './panel/panel.component';
import { AltimeterGaugeComponent } from './altimeter-gauge/altimeter-gauge.component';
import { VsiGaugeComponent } from './vsi-gauge/vsi-gauge.component';
import { AhGaugeComponent } from './ah-gauge/ah-gauge.component';
import { DiGaugeComponent } from './di-gauge/di-gauge.component';
import { TcGaugeComponent } from './tc-gauge/tc-gauge.component';

@NgModule({
	declarations: [
		AppComponent,
		GenericGaugeComponent,
		PanelComponent,
		AltimeterGaugeComponent,
		VsiGaugeComponent,
		AhGaugeComponent,
		DiGaugeComponent,
		TcGaugeComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
