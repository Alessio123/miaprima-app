import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  //string interpolation
  cani=[
    {
      nome:"roger",
      razza:"golden",
      descrizione:"yooooooooooooooooooooooooooo",
    }
  ]
  //property binding
  isDisabled=false;
  immagine1='https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg';
  immagine2='https://t3.ftcdn.net/jpg/05/24/43/88/360_F_524438877_PZFzwc5OWJ3MTWQVFfHKwu1DRVMaSgPx.jpg';
  immagine='';

  //2 way
  title = 'prova';
  onClick(event:Event){
    this.title='ho cliccato';
  }


  ngOnInit():void{
    setInterval(()=>{
      this.isDisabled =!this.isDisabled;
    },1000)
    let counter=0;
    setInterval(()=>{
      if(counter%2===0){
        this.immagine=this.immagine1;
      }
      else{
        this.immagine=this.immagine2;
      }
      counter++;
    },1000)
  }
}
