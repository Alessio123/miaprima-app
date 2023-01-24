import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css'],
})
export class TemplatesComponent implements OnInit, AfterViewInit {
  @ViewChild('inputSaluti') inputSaluti!: ElementRef<HTMLInputElement>;
  ngOnInit(): void {
    console.log('NGONINIT');
    console.log(this.inputSaluti);
  }
  ngAfterViewInit(): void {
    console.log('NGAFTERVIEWINIT');
    console.log(this.inputSaluti);
  }
  onClick(){
    console.log(this.inputSaluti.nativeElement.value);

  }
}
