import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReprtsService {
  emp1: string[] = ["Rico Dona", "EE567", "rico@gmail.com"];
  emp2: string[] = ["Mash Gonza", "EE568", "mash@gmail.com"];
  emp3: string[] = ["Strong Arm", "EE569", "strong@gmail.com"];

  // infosent1() {
  //   return this.emp1;
  // }
  // infosent2() {
  //   return this.emp2;
  // }
  // infosent3() {
  //   return this.emp3;
  // }

  addInfo(info: string) {
    this.emp1.push(info);
    this.emp2.push(info);
    this.emp3.push(info);

    // return this.emp1;
    // return this.emp2;
    // return this.emp3;
  }
  constructor() { }
}
