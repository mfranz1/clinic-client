import { Component, OnInit } from '@angular/core';
import { PractitionerService } from '../../../services/practitioner.service'

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {

  displayedColumns: string[] = ['_id', 'fName', 'lName', 'email', 'title', 'pagingNum', 'edit', 'delete'];
  doctorList = [];

  constructor(private doctorService: PractitionerService) { }

  ngOnInit(): void {
    this.doctorService.readDoctor().subscribe((res) => {this.doctorList = res});
  }

  deleteDoctor(_id){
    this.doctorService.deleteDoctor(_id).subscribe((res) => {console.log(res);
    });
  }

}
