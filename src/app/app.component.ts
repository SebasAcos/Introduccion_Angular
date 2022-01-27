import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  ngOnInit(): void {

    setTimeout(() => { this.peliculasEnCines  = [
      
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
}, 4000);
  }
    
  title = 'component.ts';
  

  peliculasEnCines;
  
  proximaspeliculas =[/***{
    titulo: 'pepe la mor',
    fecha: new Date(),
    presio: 3000
  },
  {
    titulo: 'pepa la mar',
    fecha: new Date('03-02-2022'),
    presio: 3400
  },
  {
    titulo: 'popo lo mor',
    fecha: new Date('06-03-2020'),
    presio: 5000

  }**/]

  duplicarNumero(valor:number):number{
    return valor * 2;
  }
}
