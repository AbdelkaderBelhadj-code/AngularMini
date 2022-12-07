import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Club } from 'src/app/core/model/club';
import { ClubService } from 'src/app/core/services/club.service';

@Component({
  selector: 'app-formclub',
  templateUrl: './formclub.component.html',
  styleUrls: ['./formclub.component.css']
})
export class FormclubComponent implements OnInit {
  public form: FormGroup;
  public action: String;
  public club: Club;

  constructor(private formBuilder: FormBuilder, 
    private clubService: ClubService,
    private router: Router,
    private currentRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nomClub: ['', [Validators.required]],
      description: ['', [Validators.required]],
      dateDeCreation: ['', [Validators.required]],
      image: ['', [Validators.required]]
    });
    let id = this.currentRoute.snapshot.params['id'];
    if(id != null){
      this.action = 'Update';
      this.clubService.getClubByID(id).subscribe(
        (object: Club)=> this.club = object
      )
    }else{
      this.action = 'Add';
      this.club = new Club();
    }
  }
  submit(){
    if(this.action == 'Add'){
      this.clubService.addClub(this.club).subscribe(
        ()=>{ this.router.navigate(['/clubs/list'])}
      );
    }
    if(this.action == 'Update'){
      this.clubService.updateClub(this.club).subscribe(
        () => this.router.navigate(['/clubs/list'])
      )
    }
    else{
      this.router.navigate(['/clubs/list']);
    }
  }







  }


