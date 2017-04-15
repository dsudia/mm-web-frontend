import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-navigation',
  styleUrls: ['./navigation.component.scss'],
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {

  menuItems = [];

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      {label: 'Home', routerLink: '/'},
      {label: 'Legal', routerLink: '/legal'},
    ];
  }

}
