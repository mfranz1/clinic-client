import { Component, OnInit } from '@angular/core';
import { PractitionerService } from '../../../services/practitioner.service'

@Component({
  selector: 'app-nurse-list',
  templateUrl: './nurse-list.component.html',
  styleUrls: ['./nurse-list.component.scss']
})
export class NurseListComponent implements OnInit {

  displayedColumns: string[] = ['_id', 'fName', 'lName', 'email', 'edit', 'delete'];
  nurseList = [];

  constructor(private nurseService: PractitionerService) { }

  ngOnInit(): void {
    this.nurseService.readNurse().subscribe((res) => {this.nurseList = res});
  }

  deleteNurse(_id){
    this.nurseService.deleteNurse(_id).subscribe((res) => { console.log(res);
    });
  }

}
