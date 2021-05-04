import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  displayedColumns: string[] = ['fName', 'lName', 'gender', 'email', 'primaryPhone', 'edit', 'delete'];
  patientList = [];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.readPatient().subscribe((res) => {this.patientList = res});
  }

}
