import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-restablecer-web',
  templateUrl: './restablecer-web.page.html',
  styleUrls: ['./restablecer-web.page.scss'],
})
export class RestablecerWebPage implements OnInit {
  showLabel: boolean = true;
  showBackgroundColor: boolean = false;
  texto: string = '';

  constructor(private router: Router) { }
  toggleBackground(event: any) {
    this.showBackgroundColor = event.detail.checked;
  }

  ngOnInit() {
  }
  irLoginM(){
    this.router.navigate(['/login-menu']);
  }

}
