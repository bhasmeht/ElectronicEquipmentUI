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
      ConfirmPassword:user[2],
      Active: user[3]
    },{responseType:'text'});
  }
  updateUser(user:any){
    
    return this.http.put(this.baseServerUrl + "updateuser",{
      
      UserName: user[0],
      Password: user[1],
      NewPassword:user[2],
      ConfirmPassword:user[3]
      
    },{responseType:'text'});
  }

  loginUser(user:any){
    
    return this.http.post(this.baseServerUrl + "loginuser",{
      
      UserName: user[0],
      Password: user[1],
      
    },{responseType:'text'});
  }
  
}
