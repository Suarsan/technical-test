import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: string | null, ...args: unknown[]): unknown {
    if (value) {
      // Show date at client timezone? UTC Original date? Transform by parameter? Internationalization? Both?
      const date = `${moment(value).format('DD/MM/YYYY - HH:mm')}h`;
      return date;
    }
    return null;
  }

}
