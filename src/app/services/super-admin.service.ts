import { Injectable } from '@angular/core';
import { environment } from '../shared/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SuperAdminService {

    url = environment.API_URL;

    constructor(private http: HttpClient) { }

    getAllUsers() {
        return this.http.get(this.url + '/superadmin/getAllUsers', );
    }

    getAppRoles() {
        console.log('getting user roles');
        return this.http.get(this.url + '/superadmin/getAppRoles');
    }

    updateUser(email: String, isActive: Number, roles: number[]) {
        var data = {
            'email': email,
            'isActive': isActive,
            'roles': roles
        }
        return this.http.post(this.url + '/superadmin/updateUser', data, { headers: { 'Content-Type': 'application/json' }, observe: "response" });
    }

    getAllSites() {
        return this.http.get(this.url+'/superadmin/getAllSitesForUser').pipe();
    }

}