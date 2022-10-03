import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    userid: new FormControl(""),
    username: new FormControl(""),
    password: new FormControl(""),
    active: new FormControl("")
  });

 

  userAdded(){
    this.addUserService.addUser([
      this.userForm.value.userid,
      this.userForm.value.username,
      this.userForm.value.password,
      this.userForm.value.active
    ]).subscribe()
    

   
  }

}
