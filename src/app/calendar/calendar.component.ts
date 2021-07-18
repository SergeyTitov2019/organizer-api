import { Component, OnInit } from '@angular/core';
import * as moment from "moment/moment";
import {DateService} from "../shared/data.service";

interface Day {
  value: moment.Moment,
  active: boolean,
  selected: boolean,
  disabled: boolean
}

interface Week {
  days: Day[]
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  calendar?: Week[];

  constructor(private dateService: DateService) { }

  ngOnInit(): void {
    this.dateService.date.subscribe(this.generate.bind(this))
  }
  generate(now: moment.Moment){
    // console.log('value:', value)
  }


}
