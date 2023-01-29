import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curso } from '../Model/curso';
import { CursoServiceService } from '../Servicios/curso-service.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  nombreCurso!: string;
  curso!: Curso
  private sub: any;

  constructor(private route: ActivatedRoute, private servicio: CursoServiceService) {
    this.sub = this.route.params.subscribe(params =>{
      this.nombreCurso = params['curso']
      this.curso = this.servicio.getCurso(this.nombreCurso);
    });
   }

  ngOnInit() {
  }

}
