import { Component, Inject, OnInit } from '@angular/core';
import { FamilyService } from '../../service/family/family.service';
import { FatherService } from '../../service/father/father.service';
import { ChildService } from '../../service/child/child.service';
import { HttpErrorResponse } from '../../../../node_modules/@angular/common/http';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {

  error?: string;

  constructor(private familyService: FamilyService,
              private fatherService: FatherService,
              private childService: ChildService,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  addFamily() {
    this.error = null;
    const family: FamilyDTO = ({
      fatherDTO: this.fatherService.getFather(),
      childrenDTO: this.childService.getChildList()
    });
    this.familyService.addFamily(family).subscribe(s => {
    }, (error: HttpErrorResponse) => {
      this.error = error.error.text;
      console.log(error.error.text);
      this.openSnackBar(error.error.text);
    });
  }


  getFather() {
    return this.fatherService.getFather();
  }

  getChildList() {
    return this.childService.getChildList();
  }

  getFamilyDTO() {
    return this.familyService.getFamily();
  }

  removeSearch() {
    this.familyService.removeSearch();
  }

  getMessage() {
    return this.error;
  }

  openSnackBar(text: string) {
    this.snackBar.openFromComponent(SnackMessageComponent, {
        duration: 2500,
        data: text,
        panelClass: ['snack']
      }
    );
  }
}

export interface FamilyDTO {
  id?: Number;
  fatherDTO?: FatherDTO;
  childrenDTO?: Array<ChildDTO>;
}

export interface ChildDTO {
  firstName?: string;
  secondName?: string;
  pesel?: string;
  date?: Date;
  sex?: string;
  familyDTO?: FamilyDTO;
}

export interface FatherDTO {
  firstName?: string;
  secondName?: string;
  pesel?: string;
  date?: Date;
}


@Component({
  selector: 'app-snack-bar-component-message',
  templateUrl: './snack-bar.component.html',
  styles: [`
    {
      color: cornsilk;
      background-color: #ff5050;
    }
  `],
})
export class SnackMessageComponent {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string) {
  }
  getData() {
    return this.data;
  }
}
