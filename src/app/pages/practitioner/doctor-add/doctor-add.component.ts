import { Component, OnInit } from '@angular/core';
import { PractitionerService } from 'src/app/services/practitioner.service';
import { Doctors } from '../../../models/doctors';
@Component({
  selector: 'app-doctor-add',
  templateUrl: './doctor-add.component.html',
  styleUrls: ['./doctor-add.component.scss']
})
export class DoctorAddComponent implements OnInit {

  constructor(private doctorService: PractitionerService) { }

  createDoctor(doctor: Doctors){
    this.doctorService.createDoctor(doctor).subscribe((res) => {console.log(res)});
  }

  ngOnInit(): void {
  }

}
