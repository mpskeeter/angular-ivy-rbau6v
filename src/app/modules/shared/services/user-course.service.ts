import { Injectable } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CourseService } from './course.service';
import { UserService } from './user.service';
import { Course } from '../../shared-types';

@Injectable({ providedIn: 'root' })
export class UserCourseService {
  public userCourses$: Observable<Partial<Course>[]> = combineLatest([
    this.user.currentUser$,
  ]).pipe(
    // tap(([user]) => console.log('input:', { user })),
    map(([user]) => user.enrollments.map((enrollment) => enrollment.course))
    // tap((results) => console.log('results:', results))
  );

  constructor(private user: UserService, private course: CourseService) {}
}
