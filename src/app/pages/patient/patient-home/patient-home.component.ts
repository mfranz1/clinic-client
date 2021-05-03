import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  date: string;
  time: string;
  doctor: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: '5/16/2021', time: '4:00', doctor: 'Doctor Doc'}
];

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.scss']
})



export class PatientHomeComponent implements OnInit {

  displayedColumns: string[] = ['date', 'time', 'doctor'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
