import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {
  showLabel: boolean = true;
  showBackgroundColor: boolean = false;
  texto: string = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  toggleBackground(event: any) {
    this.showBackgroundColor = event.detail.checked;
  }
  irLoginM(){
    this.router.navigate(['/home']);
  }

}
