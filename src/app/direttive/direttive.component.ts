import { Component } from '@angular/core';

@Component({
  selector: 'app-direttive',
  templateUrl: './direttive.component.html',
  styleUrls: ['./direttive.component.css']
})
export class DirettiveComponent {
    //per ndIf
    isVisible=true;
    //per ngFor
    persone=[
      {nome:"luca",cognome:"rossi",isOnline:true},
      {nome:"marco",cognome:"giallo",isOnline:false},
      {nome:"francesco",cognome:"verdi",isOnline:false},
      {nome:"anna",cognome:"blu",isOnline:true},
    ]
    //per ngSwitch
    numero=3;
    stringa="ciafo";

}
