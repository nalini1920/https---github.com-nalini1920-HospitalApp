import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckupComponent } from './checkup/checkup.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppModule } from '../app.module';
import { DoctorService } from './doctor.service';
import { HistoryComponent } from './history/history.component';
import { DefaultComponent } from './default/default.component';



@NgModule({
  declarations: [CheckupComponent, HistoryComponent, DefaultComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
  ],
  providers: [DoctorService],
})
export class DoctorModule { }