import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-select',
  styleUrls: ['./select.component.scss'],
  templateUrl: './select.component.html',
})
export class SelectComponent implements OnInit {
  @Input() profilePiece = {
    formControl: new FormControl(),
    max: 1000,
    min: 1,
    values: [],
  };
  controlError = '';
  validationErrors = {};

  constructor() { }

  ngOnInit() {
    this.profilePiece.formControl.valueChanges.subscribe(this.onValueChanged.bind(this));
    this.validationErrors = {
      maxlength: `you may only choose ${this.profilePiece.max} item${this.profilePiece.max === 1 ? '' : 's'}`,
      minlength: `you must choose at least ${this.profilePiece.min} item${this.profilePiece.min === 1 ? '' : 's'}`,
      required: `you must choose at least ${this.profilePiece.min} item${this.profilePiece.min === 1 ? '' : 's'}`,
    };
  }

  get content() {
    return this.profilePiece.values.map(item => {
      if (item.label && item.value) {
        return item;
      }
      return {label: item, value: item};
    });
  }

  get warnings() {
    if (this.controlError) {
      return [{ severity: 'error', detail: this.controlError }];
    }
    return [];
  }

  // as values on the form change, validate them
  onValueChanged() {
    this.controlError = '';
    if (this.profilePiece.formControl.dirty && this.profilePiece.formControl.invalid) {
      Reflect.ownKeys(this.profilePiece.formControl.errors).forEach(errorKey => {
        this.controlError += this.validationErrors[errorKey];
      });
    }
  }

}
