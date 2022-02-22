import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EnrollmentService, UserCourseService } from '../../../shared';
import { Course } from '../../../shared-types';

@Component({
  selector: 'app-user-course-list',
  templateUrl: './user-course-list.component.html',
})
export class UserCourseListComponent implements OnInit, OnDestroy {
  #courses: BehaviorSubject<Partial<Course>[]> = new BehaviorSubject<
    Partial<Course>[]
  >(null);
  courses$: Observable<Partial<Course>[]> = this.#courses.asObservable();
  destroy$: Subject<boolean> = new Subject<boolean>();
  // constructor(public service: UserCourseService) {}
  constructor(public service: EnrollmentService) {
    this.service.getAllForMe();
  }

  ngOnInit() {
    this.service.myEnrollments$
      .pipe(takeUntil(this.destroy$))
      .subscribe((myEnrollments) => {
        const myCourses = myEnrollments.map((enrollment) => enrollment.course);
        this.#courses.next(myCourses);
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
