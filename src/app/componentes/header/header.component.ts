import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  isHeaderVisible = true;

  constructor(private http: HttpClient, private router: Router) {}
  cerrarSesion() {
    this.http.post('http://127.0.0.1:8000/cerrar-sesion/', {}).subscribe(
      (response: any) => {
        if (response.cerrado) {
          
          this.router.navigate(['/home']);
        } else {

        }
      },
      (error) => {
        console.error('Error al cerrar sesión:', error);
      }
    );
  }



  ngOnInit() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 0) {
      this.isHeaderVisible = false;
    } else {
      this.isHeaderVisible = true;
    }
  }

}

