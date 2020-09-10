import { Component } from '@angular/core';

@Component({
  selector: 'app-teste-pipes',
  templateUrl: './teste-pipes.component.html',
  styleUrls: ['./teste-pipes.component.css']
})
export class TestePipesComponent {

  endereco: object = {
    rua: 'Rua K',
    numero: 121,
    bairro: 'Vila J',
    cidade: 'Itu'
  };

  valorDoDolar: number = 5.05;

  data = new Date();

  inflacao: number = 0.03;

  valorDecimal: number = 0.55431;

  nome: string = 'josé da silva';

}
