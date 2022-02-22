import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationTime',
})
export class DurationTimePipe implements PipeTransform {
  transform(value: number): string {
    const secondsPerMinute = 60;
    const minutesPerHour = 60;
    const hours: number = Math.floor(value / (60 * 60));
    const minutes: number = Math.floor((value - hours * 60 * 60) / 60);
    return hours + ':' + minutes + ':' + (value - minutes * 60);
  }
}
