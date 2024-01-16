import { Component, OnInit } from '@angular/core';
import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';
import ScaleBar from '@arcgis/core/widgets/ScaleBar';
import Legend from '@arcgis/core/widgets/Legend';

@Component({
  selector: 'app-web-map',
  standalone: true,
  imports: [],
  templateUrl: './web-map.component.html',
  styleUrl: './web-map.component.css'
})
export class WebMapComponent implements OnInit{

  public webmap:WebMap|any;
  public mapView:MapView|any;
  public scalebar:ScaleBar|any;
  public legend:Legend|any;


  constructor(){}

  ngOnInit(): void {

    this.webmap = new WebMap({
      portalItem:{
        id:"41281c51f9de45edaf1c8ed44bb10e30"
      }
    });

    this.mapView = new MapView({
      container:'viewdiv',
      map:this.webmap,
      // center:[-118.80500,34.02700],
      // zoom:15,

    });

    this.scalebar = new ScaleBar({
      view:this.mapView
    });

    this.mapView.ui.add(this.scalebar,"bottom-left");

    this.legend = new Legend({
      view:this.mapView
    });
    
    this.mapView.ui.add(this.legend,"bottom-right")

  }
}
