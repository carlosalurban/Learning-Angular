import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Curso en JS y Angular de Udemy ';
  public mostrarVideojuegos = true;
  public descripcion: string;
  public config;
  constructor() {
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
    this.config = Configuracion;
  }
  ocultarVideojuegos(value) {
    this.mostrarVideojuegos = value;
  }
}
