import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mostrar:boolean = true

  naoMostrar() : void{
    this.mostrar = !this.mostrar
  }
}

// teste
