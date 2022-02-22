import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../shared-types';

@Pipe({
  name: 'status',
})
export class StatusPipe implements PipeTransform {
  transform(courses: Partial<Course>[], status: string): number {
    if (!status || !courses) {
      return 0;
    }
    return courses.filter((course: Partial<Course>) => course.status === status)
      .length;
  }
}
