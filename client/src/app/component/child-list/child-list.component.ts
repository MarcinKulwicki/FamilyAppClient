import { Component, OnInit } from '@angular/core';
import { ChildService } from '../../service/child/child.service';

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.css']
})
export class ChildListComponent implements OnInit {

  firstName: string;
  secondName: string;
  pesel: string;
  sex: string;
  // childs: Array<any>;

  constructor(private childService: ChildService) {
  }

  ngOnInit() {
    // this.childService.getAll().subscribe(data => {
    //   this.childs = data;
    // });
    this.secondName = this.childService.getSecondName();
  }

  addChild() {
    const child: Child = ({
      firstName: this.firstName,
      secondName: this.secondName,
      pesel: this.pesel,
      sex: this.sex
    });
    this.childService.addToChildList(child);
    this.firstName = null;
    this.pesel = null;
    this.sex = null;
  }

  removeChild(child: Child) {
    this.childService.removeChildFromList(child);
  }

  getChildList() {
    return this.childService.getChildList();
  }
}

export interface Child {
  firstName?: string;
  secondName?: string;
  pesel?: string;
  sex?: string;
}
