import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: `app-profile`,
  styleUrls: [`./profile.component.scss`],
  templateUrl: `./profile.component.html`,
})
export class ProfileComponent implements OnInit {;
  form: FormGroup;
  profilePieces = [];

  constructor(private fb: FormBuilder ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      ageRanges: this.fb.control([]),
      calendars: this.fb.control([]),
      culture: this.fb.control([]),
      education: this.fb.control(``),
      location: this.fb.control([]),
      size: this.fb.control([]),
      states: this.fb.control([]),
      training: this.fb.control([]),
      types: this.fb.control([]),
    });
    this.profilePieces = [
      {
        select: {
          description: `What kind of schools would you like to work at??`,
          formControl: this.form.controls.types,
          min: 1,
          multiple: true,
          name: `Types of Schools`,
          values: [
            `Public District`,
            `Public Magnet`,
            `Public Charter`,
            `Public Innovation`,
            `Private For-Profit, Single Owner`,
            `Private For-Profit, Corporate Owner`,
            `Private Non-Profit`
          ],
        },
      },
      {
        select: {
          description: `What calendars are you willing to work on?`,
          formControl: this.form.controls.calendars,
          min: 1,
          multiple: true,
          name: `Calendars`,
          values: [`Traditional`, `Year-Round`]
        }
      },
      {
        select: {
          description: `What states would you like to work in?`,
          filter: true,
          formControl: this.form.controls.states,
          min: 1,
          multiple: true,
          name: `States`,
          values: [`AK`, `AL`, `AR`, `AS`, `AZ`, `CA`, `CO`, `CT`, `DC`, `DE`, `FL`, `GA`, `GU`, `HI`,
                    `IA`, `ID`, `IL`, `IN`, `KS`, `KY`, `LA`, `MA`, `MD`, `ME`, `MI`, `MN`, `MO`, `MS`,
                    `MT`, `NC`, `ND`, `NE`, `NH`, `NJ`, `NM`, `NV`, `NY`, `OH`, `OK`, `OR`, `PA`, `PR`,
                    `RI`, `SC`, `SD`, `TN`, `TX`, `UT`, `VA`, `VI`, `VT`, `WA`, `WI`, `WV`, `WY`],
        }
      },
      {
        select: {
          description: `What kind of area is your idea school in?`,
          formControl: this.form.controls.location,
          min: 1,
          multiple: true,
          name: `Location`,
          values: [`Urban`, `Suburban`, `Small City`, `Rural`],
        }
      },
      {
        select: {
          description: `How many classrooms does your ideal school have?`,
          formControl: this.form.controls.size,
          min: 1,
          multiple: true,
          name: `Size`,
          values: [`4 or less`, `5 to 9`, `10 to 19`, `20 or more`],
        }
      },
      {
        select: {
          description: `What age bands are you licensed to teach?`,
          formControl: this.form.controls.ageRanges,
          min: 1,
          multiple: true,
          name: `Age Ranges`,
          values: [`0 to 3`, `3 to 6`, `6 to 9`, `9 to 12`, `12-15`, `15-18`],
        },
      },
      {
        select: {
          description: `What training certifications do you have?`,
          formControl: this.form.controls.training,
          min: 1,
          multiple: true,
          name: `Teacher Training`,
          values: [`AMI`, `AMS`, `MCI`, `SNM`, `CGS`, `Other`],
        },
      },
      {
        select: {
          description: `Pick seven traits that describe your ideal school culture. (We know you are all of these things!)`,
          formControl: this.form.controls.education,
          max: 7,
          min: 7,
          multiple: true,
          name: `Culture`,
          values: [ `Ambitious`, `Humorous`, `Collaborative`, `Independent`, `Extroverted`, `Introverted`, `Artistic`,
                    `Musical`, `Creative`, `Organized`, `Playful`, `Quiet`, `Verbal Communicator`, `Written Communicator`,
                    `Joyful`, `Techie`, `Analog`, `Patient`, `Spontaneous`, `Routine Oriented`,
          ],
        },
      },
    ];
    this.profilePieces.forEach(piece => {
      const type = Reflect.ownKeys(piece)[0];
      const validators = [];
      if (piece[type].min) {
        validators.push(Validators.required);
        validators.push(Validators.minLength(piece[type].min));
      }
      if (piece[type].max) {
        validators.push(Validators.maxLength(piece[type].max));
      }
      if (validators.length) {
        piece[type].formControl.setValidators(validators);
      }
    });
  }

}
