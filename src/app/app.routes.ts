import { Routes } from '@angular/router';
import { SimpleMapComponent } from './simple-map/simple-map.component';
import { WebMapComponent } from './web-map/web-map.component';
import { BasemapStyleComponent } from './basemap-style/basemap-style.component';
import { LanguagemapComponent } from './languagemap/languagemap.component';
import { CustomBasemapComponent } from './custom-basemap/custom-basemap.component';

export const routes: Routes = [
    { path: '', redirectTo: '/simplemap', pathMatch: 'full' },
    { path: 'simplemap', component: SimpleMapComponent },
    { path: 'webmap', component: WebMapComponent },
    { path: 'basemapstyle', component: BasemapStyleComponent},
    { path: 'languagemap', component: LanguagemapComponent},
    { path: 'customebasemap', component: CustomBasemapComponent}
];
