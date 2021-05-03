import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  email: string;
  gender: string;
  time: string;
  injury: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Hydroge', email: 'something@mail.com', gender: 'Male', time: '1:38', injury: 'Pain' },
  { name: 'Hydrogn', email: 'something@mail.com', gender: 'Male', time: '1:38', injury: 'Pain' },
  { name: 'Hydroen', email: 'something@mail.com', gender: 'Male', time: '1:38', injury: 'Pain' },
  { name: 'Hydrgen', email: 'something@mail.com', gender: 'Male', time: '1:38', injury: 'Pain' },
  { name: 'Hydogen', email: 'something@mail.com', gender: 'Male', time: '1:38', injury: 'Pain' },
  { name: 'Hyrogen', email: 'something@mail.com', gender: 'Male', time: '1:38', injury: 'Pain' },
  { name: 'Hdrogen', email: 'something@mail.com', gender: 'Male', time: '1:38', injury: 'Pain' },
  { name: 'ydrogen', email: 'something@mail.com', gender: 'Male', time: '1:38', injury: 'Pain' },
  { name: 'drogen', email: 'something@mail.com', gender: 'Male', time: '1:38', injury: 'Pain' },
  { name: 'rogen', email: 'something@mail.com', gender: 'Male', time: '1:38', injury: 'Pain' },
  
];

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'gender', 'time', 'injury'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
