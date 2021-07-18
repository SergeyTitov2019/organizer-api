import {Pipe, PipeTransform} from "@angular/core";
import * as moment from "moment/moment";

@Pipe({
  name: 'moment',
  pure: false
})

export class MomentPipe implements PipeTransform {
  transform(m: moment.Moment | null, customFormat: string = 'MMMM YYYY'): string {
    if(!m){
      return moment().format(customFormat)
    }
    return m.format(customFormat)
  }
}




