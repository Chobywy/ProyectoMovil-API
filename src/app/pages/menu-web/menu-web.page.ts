import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-web',
  templateUrl: './menu-web.page.html',
  styleUrls: ['./menu-web.page.scss'],
})
export class MenuWebPage implements OnInit {
  isAccordionOpen: { [key: string]: boolean } = {
    'portafolio1': false,
  };

  constructor(private router: Router) { }
  verRegistro() {
    // Navegar a la página "asistencia"
    this.router.navigate(['asistencia']);
  }
  
  registrarClase() {
    // Navegar a la página "registro-asistencia"
    this.router.navigate(['registro-asistencia']);
  }
  toggleAccordion(key: string) {
    this.isAccordionOpen[key] = !this.isAccordionOpen[key];
  }

  

  profe:string="";
  correo_prof:string="";
  apellido_prof:string="";
  ngOnInit() {
    const valores=localStorage.getItem("datos");
    if (valores!=null) {
      const datos= JSON.parse(valores)
      this.profe=datos.nombre_prof
      this.correo_prof=datos.correo_prof
      this.apellido_prof=datos.ap_prof
      //ap_prof
      

    }else{
      this.router.navigate(['/home']);
    }
  }


}
