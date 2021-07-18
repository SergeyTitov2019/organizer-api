import {Component, OnInit} from '@angular/core';
import {DateService} from "../shared/data.service";
import * as moment from "moment/moment";

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
})
export class SelectorComponent implements OnInit{

  public finalData: moment.Moment = moment()


  constructor(public dateService: DateService) {
  }

  ngOnInit(): void {
    // this.dateService.newDate$.subscribe(res => {
    //   console.log('res::::',res);
    //   this.finalData = res;
    // });
  }

  go(dir: number) {
    this.dateService.changeMonth(dir)
    console.log("date:", this.dateService.date)
  }
}
