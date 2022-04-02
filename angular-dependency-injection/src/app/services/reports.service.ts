import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  emp1: string[] = ["Jack Beur", "E456", "jack@gmail.com"];
  emp2: string[] = ["Storm Power", "E457", "storm@gmail.com"];
  emp3: string[] = ["Who Knows", "E458", "who@gmail.com"];

  getInfo1(): string[] {
    return this.emp1;
  }
  getInfo2(): string[] {
    return this.emp2;
  }
  getInfo3(): string[] {
    return this.emp3;
  }
  constructor() { }
}
