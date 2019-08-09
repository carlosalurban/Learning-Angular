import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
    selector: 'app-zapatillas',
    templateUrl: './zapatillas.component.html'

})
export class ZapatillasComponent implements OnInit {
    public titulo: string;
    public zapatillas: Array<Zapatilla>;
    public marcas: string[];
    public color: string;
    public miMarca: string;
    constructor() {
        this.miMarca = 'Fila';
        this.color = 'black';
        this.marcas = new Array();
        this.titulo = 'Componente de zapatillas';
        this.zapatillas = [
            new Zapatilla('Rebook Classic', 'Reebock', 'white', 80, true),
            new Zapatilla('Rebook spartan', 'Reebock', 'black', 180, true),
            new Zapatilla('Nike Runner MD', 'Nike', 'Black', 60, true),
            new Zapatilla('Nike Airmax', 'Nike', 'Blue', 160, true),
            new Zapatilla('Adidas SuperStar', 'Adidas', 'Red', 90, false),
        ];
    }
    ngOnInit() {
        console.log(this.zapatillas);
        this.getMarcas();
    }
    getMarcas() {
        this.zapatillas.forEach((zapatilla, index) => {
            if (this.marcas.indexOf(zapatilla.marca) < 0) {

                this.marcas.push(zapatilla.marca);
            }
            console.log(index);
        });
        console.log(this.marcas);
    }
    getMarca() {
        alert(this.miMarca);
    }
    setMarca() {
        this.marcas.push(this.miMarca);
    }
}
