import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLentraMayuscula';

@Component({
  selector: 'app-crear-generos',
  templateUrl: './crear-generos.component.html',
  styleUrls: ['./crear-generos.component.css']
})
export class CrearGenerosComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre:['',{
        validators: [Validators.required, Validators.minLength(4), primeraLetraMayuscula()]
       }]
    });


  }
  guardarCambios(){
    // ..guardar cambios
    this.router.navigate(['/generos']);
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
