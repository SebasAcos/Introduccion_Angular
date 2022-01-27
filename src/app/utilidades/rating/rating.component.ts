import { Component, Input, OnInit, Output } from '@angular/core';
import { Event } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input()
  maximoRating = 5;
  @Input()
  ratingSeleccionado = 0;
  @Output()
  rated: EventEmitter<number> = new EventEmitter<number>();
  maximoRatingArr = [0];
  votado = false;
  ratingAnterios;
  
  constructor() { }

  ngOnInit(): void {
    this.maximoRatingArr = Array(this.maximoRating).fill(0);
  }
  manejarMouseEnter(index: number): void{
    this.ratingSeleccionado = index + 1;
    
  }
  manejarMouseLeave(){
    if(this.ratingAnterios !== 0 ){

      this.ratingSeleccionado = this.ratingAnterios;;
    }else{

    
    this.ratingSeleccionado = 0;
    }
  }
  rate(index: number): void {
    this.ratingSeleccionado = index + 1;
    this.votado = true;
    this.ratingAnterios = this.ratingSeleccionado;
    this.rated.emit(this.ratingSeleccionado);

  }
}
