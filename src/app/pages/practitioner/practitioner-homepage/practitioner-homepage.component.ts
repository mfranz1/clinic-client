import { Component, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { PractitionerService } from 'src/app/services/practitioner.service';

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

  displayedColumns: string[] = ['date', 'time', 'patientID', 'type'];
  displayedColumns2: string[] = ['_id', 'note', 'select'];
  doctorAppointments= [] as any;
  notesData = [];
  note = [] as any;

  constructor(private practitionerService: PractitionerService) { }

  ngOnInit(): void {
    this.practitionerService.readNotes().subscribe((res) => { this.notesData = res});
    this.practitionerService.getAppointments().subscribe((res) => { this.doctorAppointments = res });
  }

  selectNote(_id){
    this.practitionerService.getNote(_id).subscribe((res) => { this.note = res });
  }

  updateNote(noteU){
    this.practitionerService.updateNote(noteU).subscribe((res) => { console.log(res), alert('Note Updated')});
  }

  newNote(noteN){
    this.practitionerService.addNote(noteN).subscribe((res) => { console.log(res), alert('New Note Created') });
  }

}
