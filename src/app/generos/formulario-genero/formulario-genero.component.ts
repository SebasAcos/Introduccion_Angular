import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLentraMayuscula';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: ['./formulario-genero.component.css']
})
export class FormularioGeneroComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form!: FormGroup;
  @Input()
  modelo: generoCreacionDTO | undefined;

  @Output()
  submmit: EventEmitter<generoCreacionDTO> = new EventEmitter<generoCreacionDTO>();



  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre:['',{
        validators: [Validators.required, Validators.minLength(4), primeraLetraMayuscula()]
       }]
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }


  }
  guardarCambios(){
this.submmit.emit(this.form.value);
  }
  obtenerErrorCampoNombre(){
    var campo = this.form.get('nombre');
        
    if(campo?.hasError('required')){
      return'El campo nombre es requerido';
    }
    if(campo?.hasError('minlength')){
      return 'la longitud mininma es de 3 caracteres'
    }
    if(campo?.hasError('primeraLetraMayuscula')){
      return campo.getError('primeraLetraMayuscula').mensaje;
    }
    return '';
  }


}
