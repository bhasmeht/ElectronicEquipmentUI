import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAddService {

  constructor(private http: HttpClient) { }
  baseServerUrl = "http://localhost:5000/api/User/adduser";
  
  

  addUser(user:Array<any>){
    const headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(this.baseServerUrl,{
      UserId: user[0],
      UserName: user[1],
      Password: user[2],
      Active: user[3]
    },{headers:headers});
  }
  
}
