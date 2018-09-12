import { Component, OnInit } from '@angular/core';
import { Child } from '../child-list/child-list.component';
import { Father } from '../father/father.component';
import { FamilyService } from '../service/family/family.service';
import { FatherService } from '../service/father/father.service';
import { ChildService } from '../service/child/child.service';
import { HttpErrorResponse } from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {

  constructor(private familyService: FamilyService, private fatherService: FatherService, private childService: ChildService) {
  }

  ngOnInit() {
  }

  addFamily() {
    const family: Family = ({
      fatherDTO: this.fatherService.getFather(),
      childrenDTO: this.childService.getChildList()
    });

    console.log(this.fatherService.getFather().firstName);
    console.log(this.childService.getChildList());

    this.familyService.addFamily(family).retry(2).subscribe(f => {
      console.log(f);
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });

  }
  getFather(){
    return this.fatherService.getFather();
  }
  getChildList() {
    return this.childService.getChildList();
  }

}

export interface Family {
  fatherDTO?: Father;
  childrenDTO?: Array<Child>;
}
