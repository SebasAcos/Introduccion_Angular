import { Component, Input, OnInit } from '@angular/core';
import { MultipleSelectorModule } from './MultipleSelectorModel';

@Component({
  selector: 'app-selector-multiple',
  templateUrl: './selector-multiple.component.html',
  styleUrls: ['./selector-multiple.component.css']
})
export class SelectorMultipleComponent implements OnInit {

  constructor() { }

  @Input()
  Seleccionados: MultipleSelectorModule[]=[];

  @Input()
  NoSeleccionados: MultipleSelectorModule[]=[];

  ngOnInit(): void {
  }

  seleccionar(item: MultipleSelectorModule, index:number){
    this.Seleccionados.push(item);
    this.NoSeleccionados.splice(index,1);

  }
  deseleccionar(item: MultipleSelectorModule,index:number){
    this.NoSeleccionados.push(item);
    this.Seleccionados.splice(index,1);
  }

  seleccionarTodos(){
    this.Seleccionados.push(...this.NoSeleccionados);
    this.NoSeleccionados=[];

  }
  deseleccionarTodos(){
    this.NoSeleccionados.push(...this.Seleccionados);
    this.Seleccionados=[];

  }

}
