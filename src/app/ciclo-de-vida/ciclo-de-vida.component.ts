import { AfterContentInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements OnInit, OnChanges, OnDestroy, DoCheck,AfterContentInit {
// no es unevento del ciclo de vida
  constructor() { }

  @Input()
  titulo:string ='e';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes');
  }
  ngOnDestroy(): void {
    console.log('on destroy');
  }
  ngDoCheck(): void {
    console.log('do check');
  }
  ngAfterContentInit(): void {
     console.log('on after view init');
  }

  ngOnInit(): void {
    console.log('on init');
  }

}
