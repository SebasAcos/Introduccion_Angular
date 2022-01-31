import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable, MatTableModule } from '@angular/material/table';
import {actorDTO} from '../actor'

@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.css']
})
export class AutocompleteActoresComponent implements OnInit {

  constructor() { }
  
  control: FormControl = new FormControl();
  actores=[
    {nombre:'Tom Holland',personaje:'', foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/220px-Tom_Holland_by_Gage_Skidmore.jpg '},
    {nombre:'Tom Hanks', personaje:'',foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Tom_Hanks_TIFF_2019.jpg/220px-Tom_Hanks_TIFF_2019.jpg'},
    {nombre:'Samuel L. Jackson',personaje:'', foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Samuel_L_Jackson_%282017%29.jpg/220px-Samuel_L_Jackson_%282017%29.jpg'}
  ]
  actorOriginal = this.actores;

  actoresSeleccionados:actorDTO[]=[];

  columnasAMostrar =['imagen','nombre','personaje','acciones'];

  @ViewChild(MatTable) 
  table!: MatTable<any>;

  ngOnInit(): void {
    this.control.valueChanges.subscribe(valor =>{
     this.actores = this.actorOriginal;
     this.actores = this.actores.filter(actor => actor.nombre.indexOf(valor)!== -1 );
        });
  }
  optionSelected(event: MatAutocompleteSelectedEvent){
    console.log(event.option.value);
    this.actoresSeleccionados.push(event.option.value);
    this.control.patchValue('')

    if(this.table !== undefined){
      this.table.renderRows();
    }

  }
  eliminar(actor){
   
    const indice = this.actoresSeleccionados.findIndex( a =>  a.nombre === actor.nombre);
    this.actoresSeleccionados.splice(indice,1)
    this.table.renderRows();

  }
  finalizaArrastre(event:CdkDragDrop<any[]>){
    const indicePrevio =this.actoresSeleccionados.findIndex(
      actor => actor === event.item.data
    )
    moveItemInArray(this.actoresSeleccionados, indicePrevio, event.currentIndex);
    this.table.renderRows();


  }
  

}
