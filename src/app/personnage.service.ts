import { Injectable } from '@angular/core';
import { personnage } from './models/personnage.model';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class PersonnageService {

  persSubject = new Subject<any[]>();

  private pers: Array<personnage> = [{ name: 'nom 1', id: 1, type:'gentil'},
                                    { name: 'nom 2', id: 2, type:'gentil'},
                                    { name: 'nom 3', id: 3, type:'gentil'}];

emitPersSubject() 
{	
  // slice envoie une copie de la liste races    
  this.persSubject.next(this.pers.slice());  
}
  constructor() { }

  getPersById(id: number) 
  {    
    for (let i = 0; i < 3; i++) {
      console.log(id);
      console.log(this.pers[i].id);
      if(id == this.pers[i].id)
      {
        
        return this.pers[i];
      }
    }
  }


  onSwitchGentil(i: number) {
    this.pers[i].type = "gentil";
    this.emitPersSubject()
  }
  onSwitchMechant(i: number) {
    this.pers[i].type = "mechant";
    this.emitPersSubject()
  }
}
