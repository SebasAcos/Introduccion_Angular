import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLentraMayuscula';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-crear-generos',
  templateUrl: './crear-generos.component.html',
  styleUrls: ['./crear-generos.component.css']
})
export class CrearGenerosComponent {

  constructor(private router: Router) { }
  guardarCambios(genero: generoCreacionDTO){

    // ..guardar cambios
    console.log(genero);
    this.router.navigate(['/generos']);
  }
  
}
