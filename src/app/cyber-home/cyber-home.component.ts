import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cyber-home',
  standalone: true,
  imports: [],
  templateUrl: './cyber-home.component.html',
  styleUrl: './cyber-home.component.scss'
})
export class CyberHomeComponent {


  constructor(private router: Router) {}

  onCardClick(menu: string) {
    if (menu === "savvy") {
      this.router.navigate(['/cyber-savvy'])
    }      
  }

}
