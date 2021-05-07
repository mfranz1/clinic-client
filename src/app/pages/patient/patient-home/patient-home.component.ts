import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from 'src/app/services/appointments.service'

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
  patiendID = '608892b0d364195d804f3c0d'

  constructor(private patientService: AppointmentsService) { }

  ngOnInit(): void {
    this.patientService.readAppointments().subscribe((res) => { this.patientAppointments = res });
  }

  cancelAppointment(id){
    this.patientService.cancelAppointment(id).subscribe((res) => { console.log(res), alert('Appointment Canceled') })
  }

}
