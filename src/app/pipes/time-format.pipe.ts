import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'timeFormat',
  standalone: true
})
export class TimeFormatPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) { }
  transform(value: string): string {
    const minutes = parseInt(value, 10);
    if (isNaN(minutes)) {
      return value; // return original value if not a valid number
    }

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    let result = '';
    if (hours > 0) {
      result += hours + 'h ';
    }
    if (remainingMinutes > 0) {
      result += remainingMinutes + 'min';
    }

    return result.trim();
  }

}
