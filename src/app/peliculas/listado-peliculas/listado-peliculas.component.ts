import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  constructor() { }
  peliculas;
  ngOnInit(): void {
    setTimeout(() => { this.peliculas  = [
      
        {
      titulo: 'spiderman',
      fecha: new Date(),
      presio: 3000
    },
    {
      titulo: 'IronMan',
      fecha: new Date('03-02-2022'),
      presio: 3400
    },
    {
      titulo: 'UFC',
      fecha: new Date('06-03-2020'),
      presio: 5000
    }
     ]
  }, 3000);
}
  duplicarNumero(valor:number):number{
    return valor * 2;
  }
}
