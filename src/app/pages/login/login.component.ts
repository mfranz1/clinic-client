import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }

  submitted = false;

  onSubmit() { 
    this.submitted = true;
  }

  get diagnostic(){
    return JSON.stringify(this.submitted);
  }

}

