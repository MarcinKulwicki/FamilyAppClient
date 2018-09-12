import { Component, OnInit, ViewChild } from '@angular/core';
import {FatherService} from '../service/father/father.service';
import {HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/retry';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  firstName: string;
  secondName: string;
  pesel: string;
  date: Date;

  constructor(private fatherService: FatherService) {
  }

  ngOnInit() {
  }

  addFather() {

    const father: Father = ({
      firstName: this.firstName,
      secondName: this.secondName,
      pesel: this.pesel,
      date: this.date
    });
    this.fatherService.addFather(father).retry(2).subscribe(f => {
        console.log(f);
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );

  }

  getFather() {
    return this.fatherService.getFather();
  }

}

export interface Father {
  firstName?: string;
  secondName?: string;
  pesel?: string;
  date?: Date;
}
