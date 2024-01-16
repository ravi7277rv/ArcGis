import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import * as intl from '@arcgis/core/intl';


@Component({
  selector: 'app-languagemap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languagemap.component.html',
  styleUrl: './languagemap.component.css'
})
export class LanguagemapComponent implements OnInit {

  public map: Map | any;
  public view: MapView | any;
  public updatelanguage:any;

  public languages = [
    { value: "global", label: "global" },
    { value: "local", label: "local" },
    { value: "ar", label: "ar" },
    { value: "ca", label: "ca" },
    { value: "hr", label: "hr" },
    { value: "en", label: "en" },
    { value: "fi", label: "fi" },
    { value: "de", label: "de" },
    { value: "he", label: "he" },
    { value: "hu", label: "hu" },
    { value: "it", label: "it" },
    { value: "ja", label: "ja" },
    { value: "lv", label: "lv" }
  ]

  constructor() { }

  onSelectChange(event: any) {
    const selectedValue = event.target.value;
    this.updatelanguage(selectedValue)
  }

  ngOnInit(): void {

    this.map = new Map({
      basemap: {
        style:{
          id:"argis/outdoor",
          language:"es"
        }
      }
    });

    this.view = new MapView({
      map: this.map,
      container: 'mydiv',
      center: [13, 46],
      zoom: 4,
    });


    this.updatelanguage=(language:string)=>{
      intl.setLocale(language);
      this.view.map.basemap = {
        style:{
          id:"arcgis/outdoor",
          language:language
        }
      }
    }

  }
}
