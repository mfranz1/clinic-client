import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users, LoggedIn } from '../models/users';
import { retry } from 'rxjs/operators';


type Optional<T>=T | undefined;

@Injectable({
  providedIn: 'root'
})

export class UserAuthService {
  
  constructor(private http: HttpClient) { }
  private _user?: LoggedIn;

  set user(value:Optional<LoggedIn>){
    this._user = value;
  }

  get user(){
    return this._user;
  };

  API_SERVER = 'http://localhost:3000';

  authenticateUser(email: string, password: string): Promise<LoggedIn> {
    let params = {email, password}
    return new Promise((resolve, reject)=>{ 
      this.http
      .post(`${this.API_SERVER}/users/auth`, params)
      .pipe(retry(3))
      .toPromise()
      .then(
        (res:any) => {
            console.log(res);
            this.user = res;
            resolve (this.user);
        }, 
        (err)=>{
          reject(err);
        }
      );
    });
  }
}
