import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    userid:new FormControl(""),
    username: new FormControl(""),
    password: new FormControl(""),
    active: new FormControl("")
  });

 

  userUpdated(){
    this.updateUserService.updateUser([
      this.userForm.value.userid,
      this.userForm.value.username,
      this.userForm.value.password,
      this.userForm.value.active
    ]).subscribe();
  }
}
