import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAddService } from 'src/app/services/user-add.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private addUserService: UserAddService,private router: Router) { }

  ngOnInit(): void {
  }

  userForm = new FormGroup({
    
    username: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required,Validators.minLength(8)]),
    active: new FormControl("",[Validators.required])
  });

 

  userAdded(){
    this.addUserService.addUser([
      this.userForm.value.username,
      this.userForm.value.password,
      this.userForm.value.active
    ]).subscribe(res=>{
      if(res=='User Exist'){
        alert('User is already present');}
        else{
          
          this.router.navigateByUrl('equipments');
        }
      })
    
  }

}
