import { Component, OnInit } from '@angular/core';
import { FatherService } from '../../service/father/father.service';
import 'rxjs/add/operator/retry';
import { ChildService } from '../../service/child/child.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  firstName: string;
  secondName: string;
  pesel: string;
  date: Date;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private fatherService: FatherService, private childService: ChildService, private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

  addDate(event: MatDatepickerInputEvent<Date>) {
    this.date = event.value;
  }

  addFather() {

    const father: Father = ({
      firstName: this.firstName,
      secondName: this.secondName,
      pesel: this.pesel,
      date: this.date
    });
    this.childService.throwSecondName(father.secondName);
    this.fatherService.addFather(father);

  }

  getFather() {
    return this.fatherService.getFather();
  }
  erase() {
    this.fatherService.erase();
    this.childService.erase();
  }

}

export interface Father {
  firstName?: string;
  secondName?: string;
  pesel?: string;
  date?: Date;
}
