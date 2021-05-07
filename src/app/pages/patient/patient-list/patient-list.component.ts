import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
import { Patients } from 'src/app/models/patients';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  displayedColumns: string[] = ['_id', 'fName', 'middleInitial', 
  'lName', 'email', 'password', 'dob', 'address', 'primaryPhone', 
  'secondaryPhone', 'gender', 'ssn', 'emergencyContact', 'insurance', 'edit', 'delete'];
  patientList = [];
  patient = [] as any;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.readPatient().subscribe((res) => {this.patientList = res});
  }

  deletePatient(_id){
    this.patientService.deletePatient(_id).subscribe((res) => {console.log(res), alert('Patient Deleted')});
  }

  updatePatient(adminU){
    this.patientService.updatePatient(adminU).subscribe((res) => {console.log(res), alert('Patient Updated')
    });
  }

  selectPatient(_id){
    this.patientService.getPatient(_id).subscribe((res) => {this.patient = res});
  }

}
