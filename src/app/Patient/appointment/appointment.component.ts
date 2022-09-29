import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/register/user.model';
import { UserService } from 'src/app/register/user.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  @ViewChild('f3') apform: NgForm;
  selectedDoctor: string;
  time: string;
  arr: User[];
  index: number;
  private dt=[]

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  selectChangeHandler(event: any) 
  {
    this.selectedDoctor= event.target.value;
  }
  selectChangeHandler1(event: any) 
  {
    this.time= event.target.value;
  }


  onSubmit(form: NgForm){
    const value = form.value;
    this.arr = this.userService.getAllUsers();
    this.index = this.arr.findIndex(x => x.mrn === this.userService.result.mrn);
    
    console.log(this.selectedDoctor);
    console.log("In appointment",this.userService.result, this.index );
    
    this.dt = JSON.parse(localStorage.getItem("appoinmentDetail") || "[]");
    const data = {
      [this.selectedDoctor]: {
        id: this.index,
        date: value.date,
        time: this.time,
        problems: value.problem
      }
    }
    
    this.dt.push(data);
    console.log(this.dt);
    localStorage.setItem("appoinmentDetail", JSON.stringify(this.dt));

    form.reset();
    
  }

}
