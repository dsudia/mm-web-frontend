import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-status',
  styleUrls: ['./status.component.scss'],
  templateUrl: './status.component.html',
})
export class StatusComponent implements OnInit {

  @Input() profilePieces = [];

  constructor() { }

  ngOnInit() {
  }

  get currentStatus() {
    return this.profilePieces.map(piece => {
      const type = Reflect.ownKeys(piece)[0];
      const valid = piece[type].formControl.valid ? 'valid' : 'invalid';
      return { valid, name: piece[type].name };
    });
  }

}
