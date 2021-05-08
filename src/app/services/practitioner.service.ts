import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctors } from '../models/doctors';
import { Nurses } from '../models/nurses';
import { Notes } from 'src/app/models/notes';
import { Appointments } from 'src/app/models/appointments';

@Injectable({
  providedIn: 'root'
})
export class PractitionerService {

  constructor(private http: HttpClient) { }

  API_SERVER = 'http://34.197.208.129:3000';
  //API_SERVER = 'http://localhost:3000'

  readDoctor(){
    return this.http.get<Doctors[]>(`${this.API_SERVER}/doctors`);
  }
  readNurse(){
    return this.http.get<Nurses[]>(`${this.API_SERVER}/nurses`);
  }

  getNurse(_id){
    return this.http.get<Nurses[]>(`${this.API_SERVER}/nurses/${_id}`);
  }

  getDoctor(_id){
    return this.http.get<Doctors[]>(`${this.API_SERVER}/doctors/${_id}`);
  }

  createDoctor(doctor: Doctors){
    return this.http.post<Doctors>(`${this.API_SERVER}/doctors`, doctor);
  }

  createNurse(nurse: Nurses){
    return this.http.post<Nurses>(`${this.API_SERVER}/nurses`, nurse);
  }

  deleteDoctor(_id: number){
    return this.http.delete(`${this.API_SERVER}/doctors/${_id}`);
  }

  deleteNurse(_id: number){
    return this.http.delete(`${this.API_SERVER}/nurses/${_id}`);
  }
  updateNurse(nurse){
    return this.http.put<Nurses>(`${this.API_SERVER}/nurses/${nurse._id}`, nurse);
  }
  updateDoctor(doctor){
    return this.http.put<Doctors>(`${this.API_SERVER}/doctors/${doctor._id}`, doctor);
  }

  readNotes(){
    return this.http.get<Notes[]>(`${this.API_SERVER}/notes`);
  }

  getNote(id){
    return this.http.get<Notes[]>(`${this.API_SERVER}/notes/${id}`);
  }

  addNote(note: Notes){
    return this.http.post<Notes[]>(`${this.API_SERVER}/notes`, note);
  }

  updateNote(note){
    return this.http.put<Notes>(`${this.API_SERVER}/notes/${note._id}`, note);
  }

  getAppointments(){
    return this.http.get<Appointments[]>(`${this.API_SERVER}/appointments`);
  }
}
