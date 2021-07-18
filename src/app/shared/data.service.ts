import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

import * as moment from "moment/moment";

@Injectable({
  providedIn: "root"
})

export  class DateService{
  public date: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment())

  changeMonth(dir: number){
    const value = this.date.value.add(dir, 'month')
    this.date.next(value)
  }
}
