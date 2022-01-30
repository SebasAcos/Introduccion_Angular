import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) { }

  modelo: actorDTO ={nombre:'felipe', fechaNacimiento:new Date(),foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/220px-Tom_Holland_by_Gage_Skidmore.jpg'}

  ngOnInit(): void {
this.activeRoute.params.subscribe(params =>{
  //alert(params['id']);
   })
  }

  guardarCambios(actor: actorCreacionDTO){
    console.log(actor);

  }
}
