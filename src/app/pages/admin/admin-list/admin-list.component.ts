import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {

  displayedColumns: string[] = ['_id', 'fName', 'lName', 'email', 'adminPin', 'password', 'edit', 'delete'];
  adminList = [];
  admin = [] as any;


  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.readAdmin().subscribe((res) => { this.adminList = res });
  }

  deleteAdmin(_id) {
    this.adminService.deleteAdmin(_id).subscribe((res) => { console.log(res), alert('Admin User Deleted') });
  }

  updateAdmin(adminU) {
    this.adminService.updateAdmin(adminU).subscribe((res) => {
      console.log(res), alert('Admin User Updated');
    });
  }

  selectAdmin(_id) {
    this.adminService.getAdmin(_id).subscribe((res) => { this.admin = res });
  }

}
