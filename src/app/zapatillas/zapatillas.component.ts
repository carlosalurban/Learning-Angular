import { Component } from '@angular/core';

@Component({
    selector: 'app-zapatillas',
    templateUrl: './zapatillas.component.html'

})
export class ZapatillasComponent {
    public titulo: string;
    constructor() {
        this.titulo = 'Componente de zapatillas';

    }
}
