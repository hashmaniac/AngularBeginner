import { Component, OnInit } from '@angular/core';
import { ReprtsService } from '../../services/reprts.service';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css'],
  providers: [ReprtsService]
})
export class EmpInfoComponent implements OnInit {
  infoRecieved1: string[] = [];
  infoRecieved2: string[] = [];
  infoRecieved3: string[] = [];

  getInfoFromService1() {
    this.infoRecieved1 = this.rservice.emp1;
  }
  getInfoFromService2() {
    this.infoRecieved2 = this.rservice.emp2;
  }
  getInfoFromService3() {
    this.infoRecieved3 = this.rservice.emp3;
  }

  constructor(private rservice: ReprtsService) { }

  ngOnInit(): void {
  }

  updateInfo(frm: any) {
    this.rservice.addInfo(frm.value.location);
  }

}
