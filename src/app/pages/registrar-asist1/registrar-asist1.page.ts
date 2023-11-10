import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-asist1',
  templateUrl: './registrar-asist1.page.html',
  styleUrls: ['./registrar-asist1.page.scss'],
})
export class RegistrarAsist1Page implements OnInit {
  isAlertOpen = false;
  constructor(private loadingController: LoadingController,
              private alertController: AlertController,
              private modalController: ModalController,
              private router: Router) { }

  ngOnInit() {
  }

  async mostrarSpinner() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Cargando solicitud...',
      duration: 3000, 
      spinner: 'circular'
    });
  
    await loading.present();
  
    setTimeout(() => {
      loading.dismiss();
      this.mostrarAlerta();
    }, 3000);
  }

  cerrarModal() {
    this.modalController.dismiss();
  }

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      cssClass: 'alerta-felicidades',
      header: '¡Error!',
      subHeader: 'Su clase ya ha sido registrada',
      message: 'No se puede registrar la clase mas de una vez.',
      buttons: [
        {
          text: 'Volver al Menú Principal',
          handler: () => {
            this.router.navigate(['inicio']);
          }
        }
      ]
    });
  
    await alert.present();
  }
  alertButtons = [
    {
      text: 'OK',
      handler: () => {
        this.setOpen(false);
      }
    }
  ];
  
  setOpen(value: boolean) {
    this.isAlertOpen = value;
  }
}
