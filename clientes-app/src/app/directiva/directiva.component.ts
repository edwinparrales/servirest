import{ Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'

})
export class DirectivaComponent  {
  listaCurso: string[] = ['typeScrip','JavaScript','Java SE','C#','Php'];
  habilitar: boolean = true;
  constructor() { }

modEstado():void{
   this.habilitar=(this.habilitar==true)?false:true;
 }

}
