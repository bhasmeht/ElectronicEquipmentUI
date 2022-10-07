import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAddService {

  constructor(private http: HttpClient) { }
  baseServerUrl = "http://localhost:5000/api/User/";
  
  

  addUser(user:any){
    
    return this.http.post(this.baseServerUrl+ "adduser",{
      
      UserName: user[0],
      Password: user[1],
      Active: user[2]
    },{responseType:'text'});
  }
  updateUser(user:any){
    
    return this.http.put(this.baseServerUrl + "updateuser",{
      UserId: user[0],
      UserName: user[1],
      Password: user[2],
      Active: user[3]
    },{responseType:'text'});
  }

  userLogin(user:any){
     return this.http.post(this.baseServerUrl+'loginuser',{
      UserName:user[0],
      Password:user[1]
     },{responseType:'text'});
  }
  
}
