import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonNav } from '@ionic/angular';
import { Curso } from 'src/app/Model/curso';
import { CursoServiceService } from 'src/app/Servicios/curso-service.service';
import { Camera, CameraResultType } from '@capacitor/camera';

import { defineCustomElements } from '@ionic/pwa-elements/loader';


defineCustomElements(window)

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.scss'],
})
export class FormAddComponent implements OnInit {
  myForm!: FormGroup;
  curso!: FormControl;
  puntuacion!: FormControl;
  urlImagen : string = ''
  hayFoto: boolean = false;

  constructor(
    private alertController: AlertController,
    private cursoServicio: CursoServiceService
  ) {

  }

  ngOnInit() {
    this.validar();
    this.myForm = new FormGroup({
      curso: this.curso,
      puntuacion: this.puntuacion,
    });
  }

  validar() {
    this.curso = new FormControl('', [Validators.required]);
    this.puntuacion = new FormControl('', [Validators.required]);
  }

  async mostrarAlerta(curso: FormControl, puntuacion: FormControl) {
    if (curso.errors || puntuacion.errors) {
      const alert = await this.alertController.create({
        header: 'Alerta',
        subHeader: 'Error al enviar Curso',
        message: 'Comprueba que todos los campos esten rellenos',
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      let c = new Curso(curso.value, puntuacion.value)
      c.url= this.urlImagen
      this.cursoServicio.addCurso(c);
    }
    this.hayFoto=false;
    this.urlImagen= '';
    this.curso.setValue('');
    this.puntuacion.setValue('')
  }

  async takePic() {
 
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });
    let imgUrl = image.webPath;
  
    if (imgUrl != '') {
      this.hayFoto=true;
      this.urlImagen=imgUrl!
    }
  }
}
