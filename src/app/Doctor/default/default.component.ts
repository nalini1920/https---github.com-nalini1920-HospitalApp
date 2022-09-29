import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/register/user.model';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  public result: User;
  public id: number;

  constructor(private doctorService: DoctorService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const value = form.value;
    console.log(value.mrn);
    this.doctorService.onGo({'mrn': value.mrn});
    // this.result = this.doctorService.result;
    this.id = this.doctorService.index;
    this.router.navigate(['/checkup',this.id]);
    form.reset();
  }

}
