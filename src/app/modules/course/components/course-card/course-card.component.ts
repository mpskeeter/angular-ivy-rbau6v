import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  BehaviorSubject,
  Observable,
  Subject,
  takeUntil,
  combineLatest,
} from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService, EnrollmentService } from '../../../shared';
import { Course, Enrollment, User } from '../../../shared-types';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
})
export class CourseCardComponent implements OnInit, OnDestroy {
  @Input() course: Partial<Course> = {};
  maxRating: number = 5;

  destroy$: Subject<boolean> = new Subject<boolean>();

  #currentEnrollment: BehaviorSubject<Partial<Enrollment>> =
    new BehaviorSubject<Partial<Enrollment>>(null);
  currentEnrollment$: Observable<Partial<Enrollment>> =
    this.#currentEnrollment.asObservable();

  constructor(
    public user: UserService,
    public service: EnrollmentService,
    public router: Router
  ) {
    //NOTE: This is a temporary fix for the course card component.
    this.user.setCurrentUser();
    this.service.getAllForMe();
  }

  ngOnInit(): void {
    combineLatest([this.user.currentUser$, this.service.myEnrollments$])
      .pipe(
        map(([user, enrollments]) => {
          if (user && enrollments) {
            let current: Partial<Enrollment> = enrollments.find(
              (enrollment) =>
                enrollment.courseId === this.course.id &&
                enrollment.userId === user.id
            );

            current = {
              ...(current
                ? current
                : {
                    courseId: this.course.id,
                    userId: user.id,
                  }),
              currentlyEnrolled: current ? true : false,
            };
            this.#currentEnrollment.next(current);
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  // TODO: Need to add a check to see if the user is enrolled in the course.
  launchCourse(currentEnrollment: Partial<Enrollment>) {
    this.router.navigate(['/course/launch', currentEnrollment.courseId]);
  }

  unAssignCourse(enrollment: Partial<Enrollment>) {
    this.service.removeEnrollment(enrollment);
  }

  assignCourse(enrollment: Partial<Enrollment>) {
    this.service.saveEnrollment(enrollment);
  }
}
