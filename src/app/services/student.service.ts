import { Injectable } from '@angular/core';
import { environment } from '../local-env';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  url = environment.apiUrl;

  saveStudent(student:Student) {
    return this.http.post(this.url + '/student/save', student).pipe();
  }
  
  findAllStudent() {
      return this.http.get(this.url + '/student/findAll');
  }
  
  getSelectedStudent(id:number) {
      return this.http.get(this.url + '/student/getInfo/'+id);
  }

}