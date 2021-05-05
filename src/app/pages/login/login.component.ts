import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AuthUserDTO } from "../../../../../appointment-service/src/entities/users/dto/auth-user.dto";
import { UsersService } from "../../../../../appointment-service/src/entities/users/users.service";
import { Users } from '../../models/users';
import { UserAuthService } from '../../services/userauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  //@Input()
  email: string;
  password: string;
  //private authEntry: Users;

  submitted = false;

  constructor(private userAuthService: UserAuthService, private router: Router){}

  ngOnInit(): void {
    //this.authEntry = new AuthUserDTO();
  }
  
  onSubmit() { 
    this.submitted = true;
    alert("form submitted ");
  }

  authenticate(){
    console.log(this.email + " " + this.password);
    //this.authEntry = { email: this.emailAddress, password: this.password };

    this.userAuthService.authenticateUser(this.email, this.password)
      .then(()=>{
        if (this.userAuthService.user){
          console.log(this.userAuthService.user.accessGroup);
          if (this.userAuthService.user.accessGroup == "Nurse" || this.userAuthService.user.accessGroup == "Doctor"){
            this.router.navigate(['/practitioner']);
          } else if (this.userAuthService.user.accessGroup == "Patient"){
            this.router.navigate(['/patient']);
          } else if (this.userAuthService.user.accessGroup == "Admin"){
            this.router.navigate(['/admin']);
          }
        }  
      })
  };

  get diagnostic(){
    return JSON.stringify(this.submitted);
  }

}

