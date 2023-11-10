import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-notif',
  templateUrl: './header-notif.component.html',
  styleUrls: ['./header-notif.component.scss'],
})
export class HeaderNotifComponent implements OnInit {

  constructor(private router: Router) { }
  irInicioM() {
    this.router.navigate(['/inicio']);
  }

  ngOnInit() { }

}
