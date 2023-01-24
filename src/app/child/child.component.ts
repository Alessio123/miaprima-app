import { Component,EventEmitter,Input,OnChanges,OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
}) 

//  Questo è il child che prende i dati dal parent APP.TS
//  e implementa OnChanges per vedere i cambiamenti fatti dopo il click

export class ChildComponent implements OnInit,OnChanges {
 
  @Input() data:any;
  
  datoDaMandare="ciao parente";
  @Output() mandaDatiEvento =new EventEmitter<string>()
  ngOnInit():void{
    console.log(this.data);
  } 
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    }
    mandaDati(){
      this.mandaDatiEvento.emit(this.datoDaMandare);
    }
}
