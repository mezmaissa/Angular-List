import { Component, OnInit } from '@angular/core';
import { PersonnageService } from '../personnage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listpers',
  templateUrl: './listpers.component.html',
  styleUrls: ['./listpers.component.css']
})
export class ListpersComponent implements OnInit {

  pers: any[];
  constructor(private personnageService : PersonnageService, private router: Router) { }

  ngOnInit(): void {
    this.personnageService.persSubject.subscribe(      
      (pers: any[]) => { this.pers = pers; });   
      this.personnageService.emitPersSubject();
  }
  onSwitchGentil(i: number) {
    this.personnageService.onSwitchGentil(i);
  }
  onSwitchMechant(i: number) {
    this.personnageService.onSwitchMechant(i);
  }
}



  