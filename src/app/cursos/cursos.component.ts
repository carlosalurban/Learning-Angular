import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public nombre: string;
  public followers: number;

  // tslint:disable-next-line:variable-name
  constructor(private _route: ActivatedRoute, private _router: Router) {
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
      this.followers = +params.followers;
      console.log(typeof params.followers);
      if (this.nombre === 'ninguno') {
        this._router.navigate(['/home']);
      }
    });
  }
  redirigir() {
    this._router.navigate(['/zapatillas']);
  }

}
