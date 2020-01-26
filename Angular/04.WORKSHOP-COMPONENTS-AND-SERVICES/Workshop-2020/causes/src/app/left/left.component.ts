import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Icause } from '../shared/interfaces/cause';
import { CausesService } from "../causes.service";

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  get causes() { return this.causesService.causes };

  constructor(private causesService: CausesService) { }

  ngOnInit() {
    this.causesService.loadCauses();
  }
  
  selectCauseHandler(cause: Icause) {
    this.causesService.selectedCause = cause;
  }

}
