import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  date: string;
  time: string;
  doctor: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: '5/16/2021', time: '4:00', doctor: 'Doctor Doc'},
  {date: '5/16/2021', time: '4:00', doctor: 'Doctor Doc'},
  {date: '5/16/2021', time: '4:00', doctor: 'Doctor Doc'},
  {date: '5/16/2021', time: '4:00', doctor: 'Doctor Doc'},
  {date: '5/16/2021', time: '4:00', doctor: 'Doctor Doc'}
];

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  selectedDate: any;
  onSelect(event) {
    console.log(event);
    this.selectedDate = event;
  }

  displayedColumns: string[] = ['date', 'time', 'doctor', 'note', 'action'];
  appointments = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
