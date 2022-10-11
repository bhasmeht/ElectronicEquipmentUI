import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserAddService } from 'src/app/services/user-add.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private addUserService: UserAddService) { }

  ngOnInit(): void {
  }

  

  userForm = new FormGroup({
    
    username: new FormControl("",Validators.required),
    password: new FormControl("",[Validators.required,Validators.minLength(8)]),
    active: new FormControl("")
  });

  get Username(): FormControl{ 
    return this.userForm.get('username') as FormControl
  }
  get Password(): FormControl{
    return this.userForm.get('password') as FormControl
  }

 

  userAdded(){
    this.addUserService.addUser([
      
      this.userForm.value.username,
      this.userForm.value.password,
      this.userForm.value.active
    ]).subscribe();
  }

}
