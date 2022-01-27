import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

export class AppComponent implements OnInit{
  
  ngOnInit(): void {

    setTimeout(() => { this.peliculasEnCines  = [
      
      {
    titulo: 'spiderman',
    fecha: new Date(),
    presio: 3000,
    poster:'https://www.xtrafondos.com/thumbs/vertical/1_3452.jpg'
  },
  {
    titulo: 'IronMan',
    fecha: new Date('03-02-2022'),
    presio: 3400,
    poster:'https://www.xtrafondos.com/thumbs/vertical/1_9224.jpg'
  },
  {
    titulo: 'WWE',
    fecha: new Date('06-03-2020'),
    presio: 5000,
    poster: 'https://www.xtrafondos.com/thumbs/vertical/1_796.jpg'
  }
   ]
}, 4000);
  
} 
title = 'component';
  

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
  manejarRated(voto:number):void{
    alert(voto);
  }
}
