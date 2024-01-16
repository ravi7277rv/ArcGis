import { Component, OnInit } from '@angular/core';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';


@Component({
  selector: 'app-simple-map',
  standalone: true,
  imports: [],
  templateUrl: './simple-map.component.html',
  styleUrl: './simple-map.component.css'
})
export class SimpleMapComponent implements OnInit {

  public map: Map | any;
  public view: MapView | any;

  constructor() { }



  ngOnInit(): void {
    this.map = new Map({
      basemap: "arcgis/topographic"
    });

    this.view = new MapView({
      container: 'viewDiv',
      map: this.map,
      center: [-118.805, 34.027],
      zoom: 13
    })
  }
}
