import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-login-and-register',
  templateUrl: './login-and-register.component.html',
  styleUrls: ['./login-and-register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginAndRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
