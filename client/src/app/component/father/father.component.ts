import { Component, OnInit } from '@angular/core';
import { FatherService } from '../../service/father/father.service';
import 'rxjs/add/operator/retry';

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
    this.fatherService.addFather(father);

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
