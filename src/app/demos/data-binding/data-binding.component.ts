import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: false,
  
  templateUrl: './data-binding.component.html',
  styles: ``
})
export class DataBindingComponent {
  
  public contadorClique: number = 0;
  public urlImagem: string = "./assets/crossplat.jpg";
  public nome : string = "";

  adicionarClique() {
    this.contadorClique++;
  }

  zerarContador(){
    this.contadorClique = 0;
  }
}
