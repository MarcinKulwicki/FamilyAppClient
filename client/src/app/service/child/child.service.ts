import { Injectable } from '@angular/core';
import { Child } from '../../component/child-list/child-list.component';


@Injectable()
export class ChildService {

  childList: Array<Child> = [];

  constructor() {
  }
  // getAll(): Observable<any> {
  //   return this.http.get('//localhost:8080/rest');
  // }
  getChildList() {
    return this.childList;
  }

  addToChildList(child: Child) {
    this.childList.push(child);
  }

  removeChildFromList(child: Child) {
    this.childList.splice(this.childList.findIndex(c => c === child), 1);
  }
}
