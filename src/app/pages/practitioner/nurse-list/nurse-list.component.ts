import { Component, OnInit } from '@angular/core';
import { PractitionerService } from '../../../services/practitioner.service'
import { Nurses } from 'src/app/models/nurses';

@Component({
  selector: 'app-nurse-list',
  templateUrl: './nurse-list.component.html',
  styleUrls: ['./nurse-list.component.scss']
})
export class NurseListComponent implements OnInit {

  displayedColumns: string[] = ['_id', 'fName', 'lName', 'email', 'edit', 'delete'];
  nurseList = [];
  nurse = {}

  constructor(private nurseService: PractitionerService) { }

  ngOnInit(): void {
    this.nurseService.readNurse().subscribe((res) => {this.nurseList = res});
  }

  deleteNurse(_id){
    this.nurseService.deleteNurse(_id).subscribe((res) => { console.log(res);
    });
  }

  updateNurse(nurseU){
    nurseU.value._id = this.nurse['_id'];
    this.nurseService.updateNurse(nurseU.value).subscribe((res) => {
      console.log(res);
    })
  }

  selectNurse(nurse){
    this.nurse = nurse;
  }

  newNurse(){
    this.nurse = [];
  }

}
