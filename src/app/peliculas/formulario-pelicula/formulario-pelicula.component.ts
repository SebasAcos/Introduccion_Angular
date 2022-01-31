import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MultipleSelectorModule } from 'src/app/utilidades/selector-multiple/MultipleSelectorModel';
import { peliculaCreacionDTO, peliculaDTO } from '../peliculas';


@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form!: FormGroup;

  @Input()
  modelo!: peliculaDTO;

  @Output()
  OnSubmit: EventEmitter<peliculaCreacionDTO> = new EventEmitter<peliculaCreacionDTO>();
  
  generosNoSeleccionados: MultipleSelectorModule[]=[
    {llave:1 , valor:'Drama'},
    {llave:2 , valor:'Accion'},
    {llave:3 , valor:'Comedia'}];

    generoSeleccionados: MultipleSelectorModule[]=[];

  cinesNoSeleccionados: MultipleSelectorModule[]=[
      {llave:1 , valor:'CineColombia'},
      {llave:2 , valor:'cinePolis'}];
    cinesSeleccionados: MultipleSelectorModule[]=[];

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      titulo:[
        "",{
          validators:[Validators.required]
        }
      ],
      resumen:'',
      enCines:false,
      trailer: '',
      fechaLanzamiento: '',
      poster:'',
      generosId:'',
      cinesId:''
    });
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);

    } 
   }

  archivoSeleccionado(archivo: File){
    this.form.get('poster')?.setValue(archivo);
  }
  changeMarkdown(texto){
    this.form.get('resumen')?.setValue(texto);

  }

  guardarcambios(){
    console.log(this.generoSeleccionados);
    const generosIds = this.generoSeleccionados.map(val => val.llave);
    this.form.get('generosId')?.setValue(generosIds);

    const cinesIds = this.cinesSeleccionados.map(val => val.llave);
    this.form.get('cinesId')?.setValue(cinesIds);
      this.OnSubmit.emit(this.form.value);
  

  }

  

}
