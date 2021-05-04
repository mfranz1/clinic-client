import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { PracticionerDashboardComponent } from './pages/practicioner-dashboard/practicioner-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { PatientDashboardComponent } from './pages/patient-dashboard/patient-dashboard.component';
import { HeaderComponent } from './pages/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

//Angular Flex-Layout
import { FlexLayoutModule } from '@angular/flex-layout';
import { PatientListComponent } from './pages/patient/patient-list/patient-list.component';
import { AdminAddComponent } from './pages/admin/admin-add/admin-add.component';
import { PatientAddComponent } from './pages/patient/patient-add/patient-add.component';
import { PatientHomeComponent } from './pages/patient/patient-home/patient-home.component';
import { AdminListComponent } from './pages/admin/admin-list/admin-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DoctorListComponent } from './pages/practitioner/doctor-list/doctor-list.component';
import { NurseListComponent } from './pages/practitioner/nurse-list/nurse-list.component';
import { PractitionerHomepageComponent } from './pages/practitioner/practitioner-homepage/practitioner-homepage.component';
import { DoctorAddComponent } from './pages/practitioner/doctor-add/doctor-add.component';
import { NurseAddComponent } from './pages/practitioner/nurse-add/nurse-add.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { ClockComponent } from './pages/components/clock/clock.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PracticionerDashboardComponent,
    AdminDashboardComponent,
    PatientDashboardComponent,
    HeaderComponent,
    PatientListComponent,
    AdminAddComponent,
    PatientAddComponent,
    PatientHomeComponent,
    AdminListComponent,
    DoctorListComponent,
    NurseListComponent,
    PractitionerHomepageComponent,
    DoctorAddComponent,
    NurseAddComponent,
    AdminHomeComponent,
    ClockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
