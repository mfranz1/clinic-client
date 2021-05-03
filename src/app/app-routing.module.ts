import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PracticionerDashboardComponent } from './pages/practicioner-dashboard/practicioner-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { PatientDashboardComponent } from './pages/patient-dashboard/patient-dashboard.component';
import { PatientListComponent } from './pages/patient/patient-list/patient-list.component';
import { AdminAddComponent } from './pages/admin/admin-add/admin-add.component';
import { PatientHomeComponent } from './pages/patient/patient-home/patient-home.component';

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
      {path: 'dashboard', component: PatientHomeComponent}
    ]
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    children: [
      { path: 'dashboard', component: PracticionerDashboardComponent },
      { path: 'patient-list', component: PatientListComponent },
      { path: 'admin-add', component: AdminAddComponent }
    ]
  },
  {
    path: 'practitioner',
    component: PracticionerDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
