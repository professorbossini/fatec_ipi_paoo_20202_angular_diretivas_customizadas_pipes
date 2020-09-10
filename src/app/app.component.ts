import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lembretes: Array <string> = [];
  lembrete: string;
  variavelSombra = "10px 10px green";

  salvar (){
    this.lembretes = [ ...this.lembretes, this.lembrete];
    this.lembrete = "";
  }
}
