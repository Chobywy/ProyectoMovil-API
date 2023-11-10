import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro-asistencia',
  templateUrl: './registro-asistencia.page.html',
  styleUrls: ['./registro-asistencia.page.scss'],
})
export class RegistroAsistenciaPage implements OnInit {
  isAccordionOpen: { [key: string]: boolean } = {
    'portafolio1': false,
  };
  
  

  constructor(private navCtrl: NavController) { }
  
  qrData:string="{idcurso:1, idprofe:003, fecha:11-10-2023, hora:12:12}"

  toggleAccordion(key: string) {
    this.isAccordionOpen[key] = !this.isAccordionOpen[key];
  }
  

  ngOnInit() {
  }
  public alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
        console.log('Cancelado');
      },
    },
    {
      text: 'Finalizar',
      role: 'confirm',
      handler: () => {
        console.log('Finalizado');
        this.showSpinner = true; // Activa el spinner al hacer clic en "Finalizar"
        setTimeout(() => {
          this.showSpinner = false; // Desactiva el spinner después de cierto tiempo (simulando la carga)
          this.navCtrl.navigateForward('/menu-web'); // Redirige a otra página
        }, 3000); // Puedes ajustar el tiempo de espera según tus necesidades
      },
    },
  ];
  showSpinner = false;
  setResult(ev: any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }


}
