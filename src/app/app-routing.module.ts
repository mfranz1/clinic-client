import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PracticionerDashboardComponent } from './pages/practicioner-dashboard/practicioner-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { PatientDashboardComponent } from './pages/patient-dashboard/patient-dashboard.component';
import { PatientListComponent } from './pages/patient/patient-list/patient-list.component';
import { AdminAddComponent } from './pages/admin/admin-add/admin-add.component';
import { PatientHomeComponent } from './pages/patient/patient-home/patient-home.component';
import { AdminListComponent } from './pages/admin/admin-list/admin-list.component';
import { PatientAddComponent } from './pages/patient/patient-add/patient-add.component';
import { DoctorListComponent } from './pages/practitioner/doctor-list/doctor-list.component';
import { DoctorAddComponent } from './pages/practitioner/doctor-add/doctor-add.component';
import { NurseListComponent } from './pages/practitioner/nurse-list/nurse-list.component';
import { NurseAddComponent } from './pages/practitioner/nurse-add/nurse-add.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { PractitionerHomepageComponent } from './pages/practitioner/practitioner-homepage/practitioner-homepage.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'patient',
    component: PatientDashboardComponent,
    children: [
      {path: '', component: PatientHomeComponent}
    ]
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    children: [
      { path: '', component: AdminHomeComponent },
      { path: 'admin-list', component: AdminListComponent },
      { path: 'admin-add', component: AdminAddComponent },
      { path: 'patient-list', component: PatientListComponent},
      { path: 'patient-add', component: PatientAddComponent},
      { path: 'doctor-list', component: DoctorListComponent},
      { path: 'doctor-add', component: DoctorAddComponent},
      { path: 'nurse-list', component: NurseListComponent},
      { path: 'nurse-add', component: NurseAddComponent}
    ]
  },
  {
    path: 'practitioner',
    component: PracticionerDashboardComponent,
    children: [
      {path: '', component: PractitionerHomepageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
