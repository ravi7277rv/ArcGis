import { Component, OnInit } from '@angular/core';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer';
import TileLayer from '@arcgis/core/layers/TileLayer';
import BaseMap from '@arcgis/core/Basemap';


@Component({
  selector: 'app-custom-basemap',
  standalone: true,
  imports: [],
  templateUrl: './custom-basemap.component.html',
  styleUrl: './custom-basemap.component.css'
})
export class CustomBasemapComponent implements OnInit {

  public map: Map | any;
  public view: MapView | any;
  public vectorTileLayer: VectorTileLayer | any;
  public imageTileLayer: TileLayer | any;
  public baseMap: BaseMap | any;

  constructor() { }

  ngOnInit(): void {

    this.vectorTileLayer = new VectorTileLayer({
      portalItem: {
        id: "6976148c11bd497d8624206f9ee03e30" // Forest and Parks Canvas
      }
    });

    this.imageTileLayer = new TileLayer({
      portalItem: {
        id: "1b243539f4514b6ba35e7d995890db1d" // World Hillshade
      }
    });

    this.baseMap = new BaseMap({
      baseLayers:[
        this.imageTileLayer,
        this.vectorTileLayer
      ]
    });


    this.map = new Map({
      basemap: this.baseMap
    });

    this.view = new MapView({
      map: this.map,
      container: 'mydiv',
      center: [-100,40],
      zoom: 3
    })
  }
}
