import { Injectable } from '@angular/core';
import { environment } from '../local-env';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.apiUrl;



  constructor(private http: HttpClient) { }

  getToken(email: String, password: String) {
    var data = {
      "username": email,
      "password": password
    };
    return this.http.post(this.url + '/token/generate-token', data, { headers: { 'Content-Type': 'application/json' }, observe: "response" });
  }

  registerCustomer(fullname: String, email: String, password: String, organization: String) {
    var data = {
      "fullname": fullname,
      "email": email,
      "password": password,
      "organization": organization
    };
    return this.http.post(this.url + '/signup', data).pipe();
  }

  getRole() {
    return this.http.get(this.url + '/users/getRole', { headers: { 'Content-Type': 'application/json' }, observe: "response" });
  }

}
