import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Etudiant } from '../model/etudiant';
import { Club } from '../model/club';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  public url = environment.url + '/club'
  
  constructor(private http : HttpClient) { }

  getAllClub(){
    return this.http.get<Club[]>(this.url+'/display');
  }
  addClub(c: Club){
    return this.http.post(this.url+'/ajouter',c);
  }
  deleteClub(id: number){
    return this.http.delete(this.url+'/supprimer/'+id);
  }
  updateClub(c: Club ){
    return this.http.put(this.url+'/modifier', c);
  }
  getClubByID(id: number){
    return this.http.get<Club>(this.url+'/display/Club/'+id);
  }}