import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import esriConfig from '@arcgis/core/config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'arcgis';
  // public map:Map | any;
  // public view:MapView | any;

  ngOnInit(): void {
    const apiKey = "AAPK34d25986b67c4945b63fae3aea0bb436hSMEqsoNc-vJhzYkMOBMFz5uBFaNlzVrK84ys8yFyCPUOfbzy8ZkyMNv3gl4g4-B"

    esriConfig.apiKey = apiKey;
   
  }
  
}
