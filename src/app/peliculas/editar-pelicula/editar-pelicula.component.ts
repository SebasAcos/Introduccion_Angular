import { Component, OnInit } from '@angular/core';
import { peliculaCreacionDTO, peliculaDTO } from '../peliculas';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  constructor() { }

  modelo: peliculaDTO={titulo:'spider.man', trailer:'asv', enCines:true, resumen:'nada',
   fechaLanzamiento:  new Date(), poster:'https://www.xtrafondos.com/thumbs/vertical/1_3452.jpg'}

  ngOnInit(): void {
  }
  guardarCambios(pelicula: peliculaCreacionDTO){
    console.log(pelicula);

  }

}
