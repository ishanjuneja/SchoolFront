import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    $(document).ready(function () {
      $('.sidebar').hover(function () {
        $('.sidebar').toggleClass('side');
      });
    });
  }

  goToHome(){
    this.router.navigateByUrl('/home')
  }
  goToDetails(){
    this.router.navigateByUrl('sList')
  }
}
