import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  generos =[
    {id:1, nombre: 'Drama'},
    {id:2, nombre:'Acción'},
    {id:3, nombre: 'Comedia'}
  
  ];

  peliculas = [
    {
      titulo: 'spiderman', enCines: false, proximosEstrenos:true , generos:[1,2], poster: 'https://www.xtrafondos.com/thumbs/vertical/1_3452.jpg'
    },
    {
      titulo: 'IronMan', enCines: true, proximosEstrenos:true , generos:[1,2], poster: 'https://www.xtrafondos.com/thumbs/vertical/1_9224.jpg'
    },
    {
      titulo: 'WWE', enCines: true, proximosEstrenos:false , generos:[2], poster: 'https://www.xtrafondos.com/thumbs/vertical/1_796.jpg'
    },
  ]

  peliculasOriginal = this.peliculas;
  
  formularioOriginal ={
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false
  };


 form!: FormGroup;
  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioOriginal);

    this.form.valueChanges
         .subscribe(valores =>{
           this.peliculas = this.peliculasOriginal;
           this.buscarPeliculas(valores);

           
         })
  }
  buscarPeliculas(valores:any){
    if(valores.titulo){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo) !== -1);
    }
    if (valores.generoId !== 0){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId) !== -1);

    }
    if(valores.proximosEstrenos){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos);
    }
    if(valores.enCines){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines);
    }

  }
  limpiar(){
    this.form.patchValue(this.formularioOriginal);
  }

}
