import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenericGaugeComponent } from './generic-gauge/generic-gauge.component';
import { AltimeterGaugeComponent } from './altimeter-gauge/altimeter-gauge.component';
import { PanelComponent } from './panel/panel.component';


const routes: Routes = [
	{ path: '', redirectTo: '/generic-gauge', pathMatch: 'full' },
	{ path: 'generic-gauge', component: GenericGaugeComponent },
	{ path: 'altimeter', component: AltimeterGaugeComponent },
	{ path: 'panel', component: PanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
