import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAddService } from 'src/app/services/user-add.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  constructor(private updateUserService: UserAddService) { }

  ngOnInit(): void {
  }

  userForm = new FormGroup({
    
    username: new FormControl("",Validators.required),
    oldpassword: new FormControl("",[Validators.required,Validators.minLength(8)]),
    password: new FormControl("",[Validators.required,Validators.minLength(8)]),
    
  });

 

  userUpdated(){
    this.updateUserService.updateUser([
      
      this.userForm.value.username,
      this.userForm.value.oldpassword,
      this.userForm.value.password,
      
    ]).subscribe();
  }
  get Username(): FormControl{ 
    return this.userForm.get('username') as FormControl
  }
  get OldPassword(): FormControl{
    return this.userForm.get('oldpassword') as FormControl
  }
  get Password(): FormControl{
    return this.userForm.get('password') as FormControl
  }
}
