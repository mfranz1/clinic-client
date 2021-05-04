import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  date: string;
  time: string;
  patientID: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: '5/10/2021', time: '3:00', patientID: 55},
];

@Component({
  selector: 'app-practitioner-homepage',
  templateUrl: './practitioner-homepage.component.html',
  styleUrls: ['./practitioner-homepage.component.scss']
})
export class PractitionerHomepageComponent implements OnInit {

  selectedDate: any;
  onSelect(event){
    console.log(event);
    this.selectedDate= event;
  }

  displayedColumns: string[] = ['date', 'time', 'patientID', 'addNote', 'vitals'];
  patientAppointments = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
