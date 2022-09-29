import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../register/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: boolean;
  patient: boolean;
  selectedRole: string = '';
  
  @ViewChild('f') slForm: NgForm;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  
  selectChangeHandler(event: any) 
  {
    this.selectedRole= event.target.value;
  }

  onSubmit(form: NgForm) {
    
    const value = form.value;
    const detail = {
      'type': this.selectedRole,
      'email': value.email,
      'password': value.password
    };
    console.log(this.selectedRole);
    
    if(this.selectedRole === 'patient'){
      this.userService.loginUser(detail);
      this.login = this.userService.isLoginMode;
      this.patient = this.userService.isPatient;
      if(this.login == true){
        this.router.navigate(['/appointment']);
      }
    } else if(this.selectedRole === 'doctor') {
      // this.login, this.patient = this.userService.loginDoctor(detail);
      this.userService.loginDoctor(detail);
      this.login = this.userService.isLoginMode;
      this.patient = this.userService.isPatient;
      console.log('Login' + this.login);
      console.log('Pa' + this.patient);
      
      if(this.login == true){
        this.router.navigate(['/checkup']);
      }
    } else{
      console.log('Invalid');
    }
    // this.userService.loginUser(detail);
    form.reset();
  //   const newIngredient = new Ingredient(value.name,value.amount);
  //   if(this.editMode){
  //     this.slService.updateIngredient(this.editedItemIndex,newIngredient);
  //   }else{
  //     this.slService.addIngredient(newIngredient);
  //   }
  //   this.editMode = false;
  //  form.reset();
  // }
  }
}