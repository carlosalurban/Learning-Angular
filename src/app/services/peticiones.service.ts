import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class PeticionesService {
    public url: string;
    constructor(
        // tslint:disable-next-line:variable-name
        public _http: HttpClient
    ) {
        this.url = 'https://reqres.in';
    }
    getUser(userId): Observable<any> {
        return this._http.get(this.url + '/api/users/' + userId);
    }
    addUser(user): Observable<any> {
        const params = JSON.stringify(user);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url + '/api/users', params, { headers });
    }
}
