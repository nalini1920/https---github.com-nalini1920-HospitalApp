import { Component, OnInit } from '@angular/core';
import { UserService } from '../register/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public islogin: boolean = false;
  public ispatient : boolean;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  checkLogin(){
    this.islogin = this.userService.isLoginMode;
    return this.islogin;
  }
  checkPatient(){
    this.ispatient = this.userService.isPatient;
    return this.ispatient;
  }

  logout(){
    if(this.islogin === true){
      this.islogin = false;
    }
  }

}
