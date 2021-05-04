import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {

  //id, email, password, adminPin, fName, lName
  displayedColumns: string[] = ['fName', 'lName', 'email', 'edit', 'delete'];
  adminList = [];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.readAdmin().subscribe((res) => {this.adminList = res});
  }

  deleteAdmin(id){
    this.adminService.deleteAdmin(id).subscribe((res) => {console.log(res)}
    );
  }

}
