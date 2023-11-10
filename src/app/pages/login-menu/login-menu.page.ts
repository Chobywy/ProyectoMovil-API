import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServicioAPIDjangoService } from 'src/app/service/servicio-apidjango.service';
import { LoginI } from '../../modelos/login.interface';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.page.html',
  styleUrls: ['./login-menu.page.scss'],
})
export class LoginMenuPage implements OnInit {
  usuario:string='';
  password:string='';
  showLabel: boolean = true;
  showBackgroundColor: boolean = false;
  texto: string = '';
  constructor(private router: Router, private toastCtrl:ToastController, 
    private apiServ:ServicioAPIDjangoService) {}

  toggleBackground(event: any) {
    this.showBackgroundColor = event.detail.checked;
  }
  irRestablecerW(){
    this.router.navigate(['/restablecer-web']);
  }

  async irProf(){
    this.apiServ.autenticarProfesor(this.usuario, this.password).subscribe(
      (respuesta: any) => {
        console.log(respuesta)
        if (respuesta.autenticado) {
          const datos={
            'nombre_prof':respuesta.nombre_prof,
            'correo_prof':respuesta.correo_prof,
            'ap_prof':respuesta.ap_prof
            
          }
          localStorage.setItem('datos', JSON.stringify(datos));
          console.log('Datos:', respuesta.datos); 
          this.router.navigate(['/menu-web']);
          this.usuario = '';
          this.password = '';
        } else {
          this.mostrarMensajeError("Usuario y contraseña incorrectos");
        }
      },
      (error) => {
        console.error('Error en la solicitud de inicio de sesión:', error);
        this.mostrarMensajeError("Ocurrió un error durante la autenticación");
      }
    ); 
  }
  
  async mostrarMensajeError(mensaje: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 1500,
      position: 'middle'
    });
    toast.present();
  }



  ngOnInit() {
  }

}
