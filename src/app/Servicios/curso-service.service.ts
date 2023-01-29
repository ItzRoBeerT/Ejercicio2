import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Curso } from '../Model/curso';

@Injectable({
  providedIn: 'root',
})
export class CursoServiceService {
  private listaCursos: Curso[];
  private _cursos$: Subject<Curso[]>;

  constructor() {
    this.listaCursos = [new Curso('1 DAM', 5), new Curso('2 DAM', 10)];
    this._cursos$ = new Subject<Curso[]>();
  }

  getCursos(): Curso[] {
    return [...this.listaCursos];
  }

  public get cursos$(): Observable<Curso[]> {
    return this._cursos$.asObservable();
  }

  addCurso(curso: Curso) {
    this.listaCursos.push(curso);
    this._cursos$.next(this.listaCursos);
  }

  deleteCurso(curso: String) {
    this.listaCursos = this.listaCursos.filter((c) => c.nombre != curso);
    this._cursos$.next(this.listaCursos);
  }

  getCurso(nombre:string): Curso{
    let c!: Curso
    this.listaCursos.forEach(curso => {
      if (curso.nombre == nombre) {
        c = curso;
      }
    });
    return c;
  }
}
