import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';

@Component({
    selector: 'app-zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService]

})
export class ZapatillasComponent implements OnInit {
    public titulo: string;
    public zapatillas: Array<Zapatilla>;
    public marcas: string[];
    public color: string;
    public miMarca: string;
    constructor(
        // tslint:disable-next-line:variable-name
        private _zapatillaService: ZapatillaService
    ) {
        this.miMarca = 'Fila';
        this.color = 'black';
        this.marcas = new Array();
        this.titulo = 'Componente de zapatillas';
    }
    ngOnInit() {
        this.zapatillas = this._zapatillaService.getZapatillas();
        alert(this._zapatillaService.getTexto());
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
    borrarMarca(index) {
        // delete this.marcas[index];
        this.marcas.splice(index, 1);
    }
    onBlur() {
        console.log('has salido del input');
    }
    mostrarPalabra() {
        alert(this.miMarca);
    }
}
