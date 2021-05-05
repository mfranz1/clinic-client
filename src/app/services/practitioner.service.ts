import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctors } from '../models/doctors';
import { Nurses } from '../models/nurses';

@Injectable({
  providedIn: 'root'
})
export class PractitionerService {

  constructor(private http: HttpClient) { }

  API_SERVER = 'http://34.197.208.129:3000';

  readDoctor(){
    return this.http.get<Doctors[]>(`${this.API_SERVER}/doctors`);
  }
  readNurse(){
    return this.http.get<Nurses[]>(`${this.API_SERVER}/nurses`);
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
  updateNurse(_id: string){
    return this.http.put<Nurses>(`${this.API_SERVER}/nurses/`,_id)
  }
}
