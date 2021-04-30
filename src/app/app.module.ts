import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { PracticionerDashboardComponent } from './pages/practicioner-dashboard/practicioner-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { PatientDashboardComponent } from './pages/patient-dashboard/patient-dashboard.component';
import { HeaderComponent } from './pages/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PracticionerDashboardComponent,
    AdminDashboardComponent,
    PatientDashboardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
