import { Injectable } from '@angular/core';
import { environment } from '../shared/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SuperAdminService {

    url = environment.API_URL;

    constructor(private http: HttpClient) { }


    getAppRoles() {
        return this.http.get(this.url + '/users/getRole');
    }

}