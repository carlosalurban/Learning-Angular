import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService {
    public zapatillas: Array<Zapatilla>;
    constructor() {
        this.zapatillas = [
            new Zapatilla('Rebook Classic', 'Reebock', 'white', 80, true),
            new Zapatilla('Rebook spartan', 'Reebock', 'black', 180, true),
            new Zapatilla('Nike Runner MD', 'Nike', 'Black', 60, true),
            new Zapatilla('Nike Airmax', 'Nike', 'Blue', 160, true),
            new Zapatilla('Adidas SuperStar', 'Adidas', 'Red', 90, false),
        ];
    }
    getTexto() {
        return 'Hola mundo desde el servicio';
    }
    getZapatillas(): Array<Zapatilla> {
        return this.zapatillas;
    }
}
