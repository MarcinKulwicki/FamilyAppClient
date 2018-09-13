import { Injectable } from '@angular/core';
import { Father } from '../../component/father/father.component';


@Injectable()
export class FatherService {

  father: Father;
  constructor() {
  }

  addFather(father: Father) {
    this.father = father;
  }

  getFather() {
    return this.father;
  }
}
