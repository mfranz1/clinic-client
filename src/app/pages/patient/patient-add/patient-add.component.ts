import { Component, OnInit } from '@angular/core';
import { Patients } from 'src/app/models/patients';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.scss']
})
export class PatientAddComponent implements OnInit {

  constructor(private patientService: PatientService) { }

  createPatient(patient: Patients){
    this.patientService.createPatient(patient).subscribe((res) => { console.log(res), alert('New Patient User Created')});
  }

  ngOnInit(): void {
  }

}
