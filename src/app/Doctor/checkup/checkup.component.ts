import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/register/user.model';
import { Doctor } from '../doctor.model';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-checkup',
  templateUrl: './checkup.component.html',
  styleUrls: ['./checkup.component.css']
})
export class CheckupComponent implements OnInit {
  @ViewChild('patient') patientNameEle: ElementRef;
  public result: User;
  public isOpen: boolean = false;
  newForm: FormGroup;
  public patients:any = [];
  public mystring: string = '';
  public medicalDetail: Doctor ;
  public user: User[];
  public id: number;
  public time: string;
  public userDataStore:any = [];
  isDefault = true;
  
  constructor(private doctorService: DoctorService, patientNameEle: ElementRef, private router:Router) {
    this.patientNameEle = patientNameEle;
   }

  ngOnInit(): void {
   
      this.doctorService. allMedicine();
   
  }
  // onSubmit(form: NgForm){
  //   const value = form.value;
  //   console.log(value.mrn);
  //   this.doctorService.onGo({'mrn': value.mrn});
  //   this.result = this.doctorService.result;
  //   this.id = this.doctorService.index;
  //   console.log(this.result);
  //   console.log(this.id);
    
    
  // }
  check(){
  this.result = this.doctorService.result;
  this.id = this.doctorService.index;
  if(this.result){
    // this.isDefault = false;
    return true;
  } else{
    this.isDefault = true;
    return false;
  }
}

  onClick(){
    this.mystring = this.patientNameEle.nativeElement.value;
    this.patients.push(this.mystring);
    console.log(this.patients);
    this.patientNameEle.nativeElement.value = ''
    this.isOpen = true;
    
  }
  onSave(){
    this.time = new Date().toString().slice(0, 23);
    console.log(this.time);
  
    this.userDataStore = JSON.parse(localStorage.getItem("storedData") || "[]");
    this.medicalDetail = new Doctor(this.id, this.patients, [], this.time);
    this.userDataStore.push(this.medicalDetail);
    console.log(this.medicalDetail);
    localStorage.setItem('storedData', JSON.stringify(this.userDataStore));
    
    this.isDefault = true;
    this.router.navigate(['/history']);
  }

}
