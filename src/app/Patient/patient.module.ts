import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentComponent } from './appointment/appointment.component';
import { FormsModule } from '@angular/forms';
import { HistoryComponent } from './history/history.component';



@NgModule({
  declarations: [AppointmentComponent, HistoryComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PatientModule { }
