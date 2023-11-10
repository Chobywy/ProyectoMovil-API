import { Component, OnInit } from '@angular/core';
import { ServicioAPIDjangoService } from 'src/app/service/servicio-apidjango.service';
@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {
  datosDeAPI: any[] = [];


  constructor(private servAPI:ServicioAPIDjangoService) { }

  ngOnInit() {
    this.servAPI.getDatosAPI().subscribe((data: any) => {
      this.datosDeAPI = data;
    });
  }
  listar(){
    this.servAPI.listar().subscribe((data)=>{
      console.log(data)
    })
  }
  listarprofe(){
    this.servAPI.listarprofe().subscribe((data)=>{
      console.log(data)
    })
  }


}
