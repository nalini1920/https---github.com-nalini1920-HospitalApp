import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.registerDoctor();
  }

  onSubmit(form: NgForm){
    const value = form.value;
    const mrn = value.birthPlace + '-' + value.birthDate + '-' + value.name + '-' + Date().toString(). slice(8, 10) + '-' + Math.floor(Math.random() * 1000);
    const newUser = new User(value.name, value.birthPlace, value.birthDate, value.phoneNo, value.email, value.password, mrn);
    this.userService.registerUser(newUser);
    console.log(form);
    form.reset();
  }
}
