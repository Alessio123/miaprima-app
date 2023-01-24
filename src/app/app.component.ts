import { Component,OnInit } from '@angular/core';
import { ServizioProvaService } from './servizi/servizio-prova.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'miaprima-app';
  colore='';
  persone=[
    {}
  ];
  constructor(private servizioProva:ServizioProvaService) { 
  }
  ngOnInit(): void {
    this.persone=this.servizioProva.getPersone();
  }
  onClick(event:Event){
    this.title='ho cliccato';
  }
  onClick1(){
    this.persone=[
      {nome:"yoyoyoo",cognome:"rossi",isOnline:true},
      {nome:"ciao",cognome:"giallo",isOnline:false},
      {nome:"165151",cognome:"verdi",isOnline:false},
      {nome:"15156",cognome:"blu",isOnline:true},
    ]
  }
  riceviDatiEvento(value: string){
    console.log(value);
  }
  cambiaColoreEvidenziatore(colore:string){
    this.colore=colore;
  }
}
