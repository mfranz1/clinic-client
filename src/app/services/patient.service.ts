import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patients } from '../models/patients';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  //API_SERVER = 'http://34.197.208.129:3000';
  API_SERVER = 'http://localhost:3000'

  readPatient(){
    return this.http.get<Patients[]>(`${this.API_SERVER}/patients`);
  }

  getPatient(_id){
    return this.http.get<Patients[]>(`${this.API_SERVER}/patients/${_id}`);
  }

  createPatient(patient: Patients){
    return this.http.post<Patients>(`${this.API_SERVER}/patients`, patient);
  }

  deletePatient(_id: string){
      return this.http.delete(`${this.API_SERVER}/patients/${_id}`);
  }

  updatePatient(admin){
    return this.http.put<Patients>(`${this.API_SERVER}/patients/${admin._id}`, admin);
  }
}
