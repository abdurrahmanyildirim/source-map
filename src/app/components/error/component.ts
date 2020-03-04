import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-error',
    templateUrl: './component.html',
})
export class ErrorComponent {

    arr;

    constructor(private http: HttpClient) {
    }

    sendError() {
        this.newError();
    }

    newError() {
        const user = {
            name: 'sa',
            surname: 'as',
            password: 1454123
        };
        this.arr.push(user);
    }

    otherError() {
        const user = {
            name: 'sa',
            surname: 'as',
            password: 1454123
        };
        this.http.post('http://localhost:3001', user).subscribe(data => {
            throw new Error('throw error hatası');
        });
    }

}
