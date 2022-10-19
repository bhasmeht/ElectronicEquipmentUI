import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAddService } from 'src/app/services/user-add.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  constructor(private updateUserService: UserAddService, private router:Router) { }

  ngOnInit(): void {
  }

  userForm = new FormGroup({
    
    username: new FormControl("",[Validators.required, Validators.pattern("[a-zA-Z].*")]),
    oldpassword: new FormControl("",[Validators.required,Validators.minLength(8)]),
    password: new FormControl("",[Validators.required,Validators.minLength(8)]),
    confirmpassword: new FormControl("",[Validators.required,Validators.minLength(8)]),
    
  });

 

  userUpdated(){
    this.updateUserService.updateUser([
      
      this.userForm.value.username,
      this.userForm.value.oldpassword,
      this.userForm.value.password,
      this.userForm.value.confirmpassword
      
    ]).subscribe(res=>{
      if(res=="EnterCorrectUserNameOrPassword"){
        alert("Please Enter Correct UserName or Password");
        this.router.navigate(['updateuser']).then(page => { window.location.reload(); });
      }
      else if(res=="ConfirmPassword")
      {
        alert("Please Confirm Your New Password");
        this.router.navigate(['updateuser']).then(page => { window.location.reload(); });
      }
      else{
        alert("Updated Successfully");
        this.router.navigate(['updateuser']).then(page => { window.location.reload(); });
      }
      
    });
  }
  get Username(): FormControl{ 
    return this.userForm.get('username') as FormControl
  }
  get oldPassword(): FormControl{
    return this.userForm.get('oldpassword') as FormControl
  }
  get Password(): FormControl{
    return this.userForm.get('password') as FormControl
  }
  get confirmPassword(): FormControl{
    return this.userForm.get('confirmpassword') as FormControl
  }
  
}
