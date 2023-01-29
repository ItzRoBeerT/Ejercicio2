import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Curso } from '../Model/curso';
import { CursoServiceService } from '../Servicios/curso-service.service';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  cursos$!: Observable<Curso[]>;
  cursos!: Curso[];
  
  constructor(private cursoService: CursoServiceService, private router: Router) {
    this.cursos= cursoService.getCursos();
   }

  ngOnInit() {
    this.cursos$ = this.cursoService.cursos$;
    this.cursos$.subscribe(curso=> this.cursos=curso);
  }

  verDetalles(nombreCurso: string){
    this.router.navigate(['/','detalles',{curso:nombreCurso}]);
  }

}
