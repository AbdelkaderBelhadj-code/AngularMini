import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrepriseRoutingModule } from './entreprise-routing.module';
import { EntrepriseComponent } from './entreprise.component';
import { ListentrepriseComponent } from './listentreprise/listentreprise.component';
import { FormentrepriseComponent } from './formentreprise/formentreprise.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    EntrepriseComponent,
    ListentrepriseComponent,
    FormentrepriseComponent,
    EntreprisesComponent
  ],
  imports: [
    CommonModule,
    EntrepriseRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbPaginationModule,
    Ng2SearchPipeModule    
  ]
})
export class EntrepriseModule { }
