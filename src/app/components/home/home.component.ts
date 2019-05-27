import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { SuperAdminService } from '../../services/super-admin.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Role } from '../../models/role';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 allUsers:User[];
 roles:Role[];

  constructor(private superAdminService: SuperAdminService, private spinnerService: Ng4LoadingSpinnerService,
    private router: Router) {
  }

  ngOnInit() {
   
    this.getApplicationRoles();
  }

  getAllUsers() {
    this.superAdminService.getAllUsers().subscribe(
      (res: User[]) => {
        this.allUsers = res;
      },
      (err: any) => {
        console.log(err);
      })
  }


  getApplicationRoles() {
    this.superAdminService.getAppRoles().subscribe((res: Role[]) => {
      this.roles = res;
    },
      err => {
        console.log('Error', err);
      })
  }


}