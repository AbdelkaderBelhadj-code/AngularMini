import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrepriseComponent } from './entreprise.component';
import { FormentrepriseComponent } from './formentreprise/formentreprise.component';
import { ListentrepriseComponent } from './listentreprise/listentreprise.component';

const routes: Routes = [{ path: '', component: EntrepriseComponent ,children:[
  {path:'', component:ListentrepriseComponent},
  {path:'list',component:ListentrepriseComponent},
  {path:'add',component:FormentrepriseComponent},
  {path:'update/:id', component:FormentrepriseComponent},
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrepriseRoutingModule { }
