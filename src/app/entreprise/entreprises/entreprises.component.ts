import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';
import { Entreprise } from 'src/app/core/model/entreprise';

@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.css']
})
export class EntreprisesComponent implements OnInit {

  @Input() entreprise:Entreprise;
 @Output() notification: EventEmitter<Entreprise> =new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  notifyParent(){
    this.notification.emit(this.entreprise)
  }

}
