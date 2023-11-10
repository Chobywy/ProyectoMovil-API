import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioAPIDjangoService } from 'src/app/service/servicio-apidjango.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private router:Router, private servAPI:ServicioAPIDjangoService) { }
  irInicioM(){
    this.router.navigate(['/inicio']);
  }

  datosDeAPI: any[] = [];



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



}
