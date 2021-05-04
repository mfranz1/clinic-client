import { Component, OnInit } from '@angular/core';
import { Nurses } from 'src/app/models/nurses';
import { PractitionerService } from 'src/app/services/practitioner.service';



@Component({
  selector: 'app-nurse-add',
  templateUrl: './nurse-add.component.html',
  styleUrls: ['./nurse-add.component.scss']
})
export class NurseAddComponent implements OnInit {

  constructor(private nurseService: PractitionerService) { }

  createNurse(nurse: Nurses){
    this.nurseService.createNurse(nurse).subscribe((res) => { console.log(res)});
  }

  ngOnInit(): void {
  }

}
