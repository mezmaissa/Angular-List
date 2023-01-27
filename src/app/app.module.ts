import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { PersonnageService } from './personnage.service';
import { DetailPersComponent } from './detail-pers/detail-pers.component';

import { RouterModule,Routes } from '@angular/router';
import { ListpersComponent } from './listpers/listpers.component';
const appRoutes: Routes = [  
  { path: 'details/:id', component: DetailPersComponent	 },  
  { path: 'details', component: ListpersComponent },  
  { path: '', component: AppComponent }];
  


@NgModule({
  declarations: [
    AppComponent,
    DetailPersComponent,
    ListpersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)   
  ],
  providers: [PersonnageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
