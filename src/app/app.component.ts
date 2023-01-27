import { Component } from '@angular/core';
import { PersonnageService } from '../app/personnage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Liste de personnages';
  constructor(private router: Router) { 
    this.router.navigate(['details']);
  }

}
