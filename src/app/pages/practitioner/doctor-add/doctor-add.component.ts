import { Component, OnInit } from '@angular/core';
import { PractitionerService } from 'src/app/services/practitioner.service';

@Component({
  selector: 'app-doctor-add',
  templateUrl: './doctor-add.component.html',
  styleUrls: ['./doctor-add.component.scss']
})
export class DoctorAddComponent implements OnInit {

  constructor(private doctorService: PractitionerService) { }


  createDoctor(doctor: any){
    this.doctorService.createDoctor(doctor).subscribe((res) => {console.log(res)});
  }

  ngOnInit(): void {
  }

}
