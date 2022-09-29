import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckupComponent } from './Doctor/checkup/checkup.component';
import { DefaultComponent } from './Doctor/default/default.component';
import { HistoryComponent } from './Doctor/history/history.component';
import { LoginComponent } from './login/login.component';
import { AppointmentComponent } from './Patient/appointment/appointment.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
 {path: '', redirectTo: '/login', pathMatch: 'full'},
 {path: 'login', component: LoginComponent},
 {path: 'register', component: RegisterComponent},
 {path: 'checkup', component: CheckupComponent},
 {path: 'default', component: DefaultComponent},
 {path: 'history', component: HistoryComponent},
 {path: 'checkup/:id', component: CheckupComponent},
 {path: 'appointment', component: AppointmentComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}