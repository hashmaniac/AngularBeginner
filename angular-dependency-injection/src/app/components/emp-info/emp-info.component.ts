import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css'],
  providers: [ReportsService]
})
export class EmpInfoComponent implements OnInit {
  infoReceived1: string[] = [];
  infoReceived2: string[] = [];
  infoReceived3: string[] = [];

  getInfofromService1() {
    this.infoReceived1 = this.rservice.emp1;
  }
  getInfofromService2() {
    this.infoReceived2 = this.rservice.emp2;
  }
  getInfofromService3() {
    this.infoReceived3 = this.rservice.emp3;
  }

  constructor(private rservice: ReportsService) { }

  ngOnInit(): void {
  }

}
