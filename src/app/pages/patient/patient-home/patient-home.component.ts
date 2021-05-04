import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.scss']
})

export class PatientHomeComponent implements OnInit {
  selectedDate: any;
  onSelect(event){
    console.log(event);
    this.selectedDate= event;
  }

  displayedColumns: string[] = ['date', 'time', 'doctorID', 'cancel'];
  patientAppointments = [];

  constructor() { }

  ngOnInit(): void {
  }

}
