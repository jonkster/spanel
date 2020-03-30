import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenericGaugeComponent } from './generic-gauge/generic-gauge.component';
import { AltimeterGaugeComponent } from './altimeter-gauge/altimeter-gauge.component';
import { AhGaugeComponent } from './ah-gauge/ah-gauge.component';
import { VsiGaugeComponent } from './vsi-gauge/vsi-gauge.component';
import { DiGaugeComponent } from './di-gauge/di-gauge.component';
import { TcGaugeComponent } from './tc-gauge/tc-gauge.component';
import { PanelComponent } from './panel/panel.component';


const routes: Routes = [
	{ path: '', redirectTo: '/panel', pathMatch: 'full' },
	{ path: 'generic-gauge', component: GenericGaugeComponent },
	{ path: 'altimeter', component: AltimeterGaugeComponent },
	{ path: 'ah', component: AhGaugeComponent },
	{ path: 'di', component: DiGaugeComponent },
	{ path: 'tc', component: TcGaugeComponent },
	{ path: 'vsi', component: VsiGaugeComponent },
	{ path: 'panel', component: PanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
