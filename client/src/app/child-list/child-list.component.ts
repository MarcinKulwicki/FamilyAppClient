import {Component, OnInit} from '@angular/core';
import {ChildService} from '../service/child/child.service';
import {HttpErrorResponse} from '../../../node_modules/@angular/common/http'

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
  childs: Array<any>;

  constructor(private childService: ChildService) {
  }

  ngOnInit() {
    this.childService.getAll().subscribe(data => {
      this.childs = data;
    });
  }

  addChild() {
    const child: Child = ({
      firstName: this.firstName,
      secondName: this.secondName,
      pesel: this.pesel,
      sex: this.sex
    });
    this.childService.addChild(child).retry(2).subscribe(f => {
      console.log(f);
      if (f == null) {
        this.childService.addToChildList(child);
        console.log('no error');
      }
    }, (error: HttpErrorResponse) => {
      console.log(error.message);
    });
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
