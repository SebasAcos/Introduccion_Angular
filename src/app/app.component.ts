import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  ngOnInit(): void {

    setTimeout(() => {
      
}, 3000);
}

    
  title = 'component.ts';
  



  duplicarNumero(valor:number):number{
    return valor * 2;
  }
}
