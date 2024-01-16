import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';


@Component({
  selector: 'app-basemap-style',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basemap-style.component.html',
  styleUrl: './basemap-style.component.css'
})
export class BasemapStyleComponent implements OnInit {

  public map: Map | any;
  public mapview: MapView | any;
  public updateBaseMapStyle:any;

constructor(){}

onSelectChange(event: any) {
  const selectedValue = event.target.value;
  this.updateBaseMapStyle(selectedValue)
}

ngOnInit(): void {
  this.map = new Map({
    basemap: "arcgis/topographic"
  });

  this.mapview = new MapView({
    container: 'viewDiv',
    map: this.map,
    center: [-118.805, 34.027],
    zoom: 13
  })


  this.updateBaseMapStyle = (basemapId:any) =>{
    this.mapview.map.basemap = basemapId;
  }
}

  public basemapstyle = [
    { value: "arcgis/navigation", label: "arcgis/navigation" },
    { value: "arcgis/navigation-night", label: "arcgis/navigation-night" },
    { value: "arcgis/streets", label: "arcgis/streets" },
    { value: "arcgis/streets-relief", label: "arcgis/streets-relief" },
    { value: "arcgis/streets-night", label: "arcgis/streets-night" },
    { value: "arcgis/outdoor", label: "arcgis/outdoor" },
    { value: "arcgis/imagery", label: "arcgis/imagery" },
    { value: "arcgis/topographic", label: "arcgis/topographic" },
    { value: "arcgis/terrain", label: "arcgis/terrain" },
    { value: "arcgis/oceans", label: "arcgis/oceans" },
    { value: "arcgis/human-geography", label: "arcgis/human-geography" },
    { value: "arcgis/nova", label: "arcgis/nova" },
    { value: "arcgis/modern-antique", label: "arcgis/modern-antique" },
    { value: "arcgis/midcentury", label: "arcgis/midcentury" },
    { value: "arcgis/newspaper", label: "arcgis/newspaper" },
    { value: "arcgis/standard", label: "arcgis/standard" },
    { value: "arcgis/standard-relief", label: "arcgis/standard-relief" },
    { value: "arcgis/hybrid", label: "arcgis/hybrid" }
  ]



}
