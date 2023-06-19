import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  nomePortal: string;
  cursos: string[] = ['Java', 'Ext JS', 'Angular'];
  nomes: string [] = ['João', 'Maria', 'José'];
  numeros: number[] = [1, 2, 3, 4, 5];

  constructor() {
    this.nomePortal = 'http://loiane.training';
  }

}
