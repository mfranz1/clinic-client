import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.scss']
})
export class AdminAddComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  createAdmin(admin: Admin) {
    this.adminService.createAdmin(admin).subscribe((res) => { console.log(res) });
  }
  ngOnInit(): void {
  }

}
