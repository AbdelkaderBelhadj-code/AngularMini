import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entreprise } from 'src/app/core/model/entreprise';
import { EntrepriseService } from 'src/app/core/services/entreprise.service';

@Component({
  selector: 'app-listentreprise',
  templateUrl: './listentreprise.component.html',
  styleUrls: ['./listentreprise.component.css']
})
export class ListentrepriseComponent implements OnInit {
  entreprise: Entreprise;
  listEntp : Entreprise[];
  public length: number;
  public page = 1;
  public pageSize=6;
  searchText: any;
  constructor(private EntpServ: EntrepriseService,private router: Router) { }

  ngOnInit(): void {
    this.EntpServ.getAllEntreprises().subscribe(
      (data)=>{this.listEntp = data},
      ()=> {},
      ()=> {this.length = this.listEntp.length},
      );

      
     
    
  }
  delete(entreprise: Entreprise) {
    if(confirm("Are you sure to delete "+entreprise.nom)) {
      this.EntpServ.deleteEntreprise(entreprise.idEntreprise).subscribe()
      location.reload();
    }
  }
  Back() {
    this.router.navigate([''])
  }
}
