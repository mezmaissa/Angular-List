import { Component, OnInit } from '@angular/core';
import { PersonnageService } from './../personnage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-pers',
  templateUrl: './detail-pers.component.html',
  styleUrls: ['./detail-pers.component.css']
})
export class DetailPersComponent implements OnInit {

  name: string = 'test';  
	type: string = 'neutre'; 
  id: number = -1; 

	constructor(private personnageService: PersonnageService, private route: ActivatedRoute) { }  

  ngOnInit(): void 
  {
    const id = this.route.snapshot.params['id'];      
    this.name = this.personnageService.getPersById(+id).name;   
    this.type = this.personnageService.getPersById(+id).type;  
    this.id = this.personnageService.getPersById(+id).id;  
  }

}

