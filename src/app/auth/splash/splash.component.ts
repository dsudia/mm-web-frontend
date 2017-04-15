import { UserService } from './../../user.service';
import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-splash',
  styleUrls: ['./splash.component.scss'],
  templateUrl: './splash.component.html',
})
export class SplashComponent implements OnInit {

  constructor(private user: UserService, private router: Router) { }

  ngOnInit() {
    this.user.checkIfAuthenticated().subscribe(this.redirectHome.bind(this),  this.redirectLogin.bind(this));
  }

  redirectHome(response) {
    console.log('success!',  response);
  }

  redirectLogin(response) {
    console.log('need to login', response);
    this.router.navigate(['login']);
  }

}
