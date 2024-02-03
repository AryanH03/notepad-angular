import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormService{

  constructor(private http:HttpClient) { }

  insertUser(data:any):Observable<any>{
    return this.http.post('http://localhost:8080/api/notes/user',data)
  }
  insertNote(data:any):Observable<any>{
    return this.http.post('http://localhost:8080/api/notes',data);
  }
  loginUser(data:any):Observable<any>{
    return this.http.post('http://localhost:8080/api/notes/login',data);
  }
  getAllNotes(data:number):Observable<any>{
    return this.http.get('http://localhost:8080/api/notes'+data);
  }
}
