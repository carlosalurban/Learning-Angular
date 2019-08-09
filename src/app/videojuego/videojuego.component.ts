import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-videojuego',
    templateUrl: './videojuego.component.html'

})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
    public titulo: string;
    public listado: string;
    constructor() {
        this.titulo = 'Componente de Videojuegos';
        this.listado = 'Listado de los juegos mas populares';
        // console.log('Se ha cargado el componente videojeugo');
    }
    ngOnInit() {
        // console.log('OnInit ejecutado');
    }
    ngDoCheck() {
        // console.log('Docheck ejecutado');
    }
    ngOnDestroy() {
        // console.log('0nDestroy ejecutado');
    }
    cambiarTitulo() {
        this.titulo = 'nuevo titulo del componente';
    }
}
