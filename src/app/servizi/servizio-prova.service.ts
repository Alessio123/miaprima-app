import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioProvaService {

  persone:persona[]=[
    {nome:"luca",cognome:"rossi",isOnline:true},
    {nome:"marco",cognome:"giallo",isOnline:false},
    {nome:"francesco",cognome:"verdi",isOnline:false},
    {nome:"anna",cognome:"blu",isOnline:true},
  ]
  constructor() {
   }
   getPersone(){
    let a = new persona();
    let res = [];
    a.nome = 'Tiziano';
    a.cognome = 'Angelocola'
    a.isOnline = true;
    // this.persone.push(a);
    return this.persone;
   }
   getPersona(index:number){
      return this.persone[index];
   }
}

// in model
export class persona{
  "nome":string;
  "cognome":string;
  "isOnline":boolean;
};
