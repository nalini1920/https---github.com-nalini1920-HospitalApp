import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './register/user.service';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { DoctorModule } from './Doctor/doctor.module';
import { DoctorService } from './Doctor/doctor.service';
import { PatientModule } from './Patient/patient.module';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DoctorModule,
    PatientModule
  ],
  providers: [UserService, DoctorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
