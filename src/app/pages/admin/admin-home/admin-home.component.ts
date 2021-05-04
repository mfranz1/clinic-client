import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from 'src/app/services/appointments.service';

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

  displayedColumns: string[] = ['date', 'time', 'doctorID', 'note', 'action'];
  appointments = [];

  constructor(private appointmentService: AppointmentsService) { }

  ngOnInit(): void {
    this.appointmentService.readAppointments().subscribe((res) => {this.appointments = res});
  }

}
