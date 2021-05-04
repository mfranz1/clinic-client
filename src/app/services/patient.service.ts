import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patients } from '../models/patients';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  API_SERVER = 'http://localhost:3000';

  readPatient(){
    return this.http.get<Patients[]>(`${this.API_SERVER}/patients`);
  }

  createPatient(patient: Patients){
    return this.http.post<Patients>(`${this.API_SERVER}/patients`, patient);
  }

  deletePatient(id: string){
      return this.http.delete(`${this.API_SERVER}/patients:${id}`);
  }

  updatePatient(id: string){
    return this.http.put<Patients>(`${this.API_SERVER}/admin`, id);
  }
}
