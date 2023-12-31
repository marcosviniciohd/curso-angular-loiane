import { Component } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  nomePortal: string;
  cursos: string[];
  nomes: string [] = ['João', 'Maria', 'José'];
  numeros: number[] = [1, 2, 3, 4, 5];

  constructor(private cursosService: CursosService) {
    this.nomePortal = 'http://loiane.training';
    this.cursos = this.cursosService.getCursos();
  }

}
