import { Component, OnInit } from '@angular/core';
import {ChildService} from '../shared/child/child.service';

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.css']
})
export class ChildListComponent implements OnInit {

  childs: Array<any>;

  constructor(private childService: ChildService) { }

  ngOnInit() {
    this.childService.getAll().subscribe(data => {
      this.childs = data;
    });
  }

}

export interface Child {
  firstName?: string;
  secondName?: string;
  pesel?: string;
  sex?: string;
}
