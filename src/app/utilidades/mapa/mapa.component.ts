import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng} from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 14,
    center: latLng(18.482849960148176, -69.93999481201173)
  };

  //capas: Marker<any>[] = [];

 /** manjarClick(event: LeafletMouseEvent): void{
    const latitud = event.latLng.lat;
    const longitud =  event.latLng.lng;
    console.log({latitud,longitud});
    this.capas.push(marker([longitud,latitud]))

  } */

}
