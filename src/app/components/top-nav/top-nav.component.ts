import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  
  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
  
  doLogout() {
    sessionStorage.removeItem('token');
    this.location.replaceState('/');
    this.router.navigate(['/']);
  }

}
