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
  urlImagen: string = 'https://ionicframework.com/docs/img/demos/card-media.png';
  private sub: any;

  constructor(private route: ActivatedRoute, private servicio: CursoServiceService) {
    this.sub = this.route.params.subscribe(params =>{
      this.nombreCurso = params['curso']
      this.curso = this.servicio.getCurso(this.nombreCurso);
      if (this.curso.url!='') {
        this.urlImagen= this.curso.url;
      }
    });



   
   }

  ngOnInit() {
  }

}
