import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../models/admin';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  API_SERVER = 'http://34.197.208.129:3000';

  readAdmin(){
    return this.http.get<Admin[]>(`${this.API_SERVER}/admins`);
  }

  createAdmin(admin: Admin){
    return this.http.post<Admin[]>(`${this.API_SERVER}/admins`, admin);
  }

  deleteAdmin(_id: string){
    return this.http.delete(`${this.API_SERVER}/admins/${_id}`);
  }

  updateAdmin(id: string){
    return this.http.put<Admin>(`${this.API_SERVER}/admin`, id);
  }


}
