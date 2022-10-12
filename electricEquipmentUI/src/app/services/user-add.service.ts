import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAddService {

  constructor(private http: HttpClient) { }
  baseServerUrl = "http://localhost:5000/api/User/";

  currentUser: BehaviorSubject<any> =new BehaviorSubject(null); //rxjs

  jwtHelperService=new JwtHelperService();
  
  

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
  setToken(token:string){
    localStorage.setItem("access_token",token);
    this.loadCurrentUser();
  }

  loadCurrentUser(){
    const token=localStorage.getItem("access_token");
    const userInfo= token!=null? this.jwtHelperService.decodeToken(token):null;
    console.log(userInfo);
  }

  isLoggedin():boolean{
    return localStorage.getItem("access_token")?true:false;
  }

  removeToken()
  {
    localStorage.removeItem("access_token");
  }
  
}
