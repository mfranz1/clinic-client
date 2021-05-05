import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointments } from 'src/app/models/appointments';


@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  API_SERVER = 'http://34.197.208.129:3000';

  constructor(private http: HttpClient) { }

  readAppointments(){
    return this.http.get<Appointments[]>(`${this.API_SERVER}/appointments`)
  }
}
