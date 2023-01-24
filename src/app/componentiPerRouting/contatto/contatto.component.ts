import { Component,Input,OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServizioProvaService } from 'src/app/servizi/servizio-prova.service';

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrls: ['./contatto.component.css']
})
export class ContattoComponent implements OnInit { 
  id:number;
  personaContatto:any;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.id=+params.get('id')!;
      this.personaContatto=this.servizioProva.getPersona(this.id);
    })
  }
  constructor(private route: ActivatedRoute, private servizioProva: ServizioProvaService){
  }
 
}
