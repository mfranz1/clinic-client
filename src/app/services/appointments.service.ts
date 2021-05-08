import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointments } from 'src/app/models/appointments';


@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  API_SERVER = 'http://34.197.208.129:3000';
  //API_SERVER = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  readAppointments(){
    return this.http.get<Appointments[]>(`${this.API_SERVER}/appointments`)
  }

  getAppointments(_id){
    return this.http.get<Appointments[]>(`${this.API_SERVER}/appointments/${_id}`);
  }

  createAppointment(appointment: Appointments){
    return this.http.post<Appointments>(`${this.API_SERVER}/appointments`, appointment)
  }

  cancelAppointment(_id: number){
    return this.http.delete(`${this.API_SERVER}/appointments/${_id}`);
  }

  getDoctors(){
    return this.http.get(`${this.API_SERVER}/doctors`);
  }

  getNotes(){
    return this.http.get(`${this.API_SERVER}/notes`);
  }
}
