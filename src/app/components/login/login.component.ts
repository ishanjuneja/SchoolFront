import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { getDefaultService } from '../../../../node_modules/@types/selenium-webdriver/edge';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: String;
  password: String;
  token: String;
  fullname: String;
  organization: String;

  register: boolean = false;

  constructor(private authService: AuthService, private toast: ToastrService, private router: Router,
  private spinnerService: Ng4LoadingSpinnerService) {
  }

  ngOnInit() {
  }

  doLogin() {
    this.spinnerService.show();
    this.authService.getToken(this.email, this.password).subscribe(
      (res: any) => {
        sessionStorage.setItem("token", res.body.token);
      }, err => {
        console.log(err)
        this.spinnerService.hide();
        var errormsg = err.error.text;
        errormsg = errormsg==null?'Invalid Credentials':errormsg;
        this.toast.error(errormsg, errormsg, {
          timeOut: 3000
        });
      }, () => {
        this.getRole();
      });

  }

  getRole() {
    this.authService.getRole().subscribe((res: any) => {
      console.log(res);
    },
      err => {
        console.log(err);
        var role: String = err.error.text;
        this.spinnerService.hide();
        if (role.startsWith('SUPER_ADMIN')) {
          this.router.navigate(['/home']);
        }
        if (role.startsWith('ADMIN')) { this.router.navigate([''])}
      });
  }

  doRegister() {
    this.spinnerService.show();
    this.authService.registerCustomer(this.fullname, this.email, this.password, this.organization).subscribe(
      res => {
        console.log(res);
        this.spinnerService.hide();
        this.togglePage();
        this.toast.success('Please check registered email', 'Registration Successful', {
          timeOut: 3000
        });
      },
      err => {
        this.spinnerService.hide();
        console.log(err);
        this.toast.error('Email Already Exists', 'Registration Failed', {
          timeOut: 3000
        });
      }
    )
  }


  togglePage() {
    this.register = !this.register;
  }

}
