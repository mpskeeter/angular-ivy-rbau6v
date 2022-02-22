import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { rawEnrollments, getRawCourse } from './rawData';
import { Enrollment, User } from '../../shared-types';
import { CrudService } from './crud.service';
import { UserService } from './user.service';
import { CourseService } from './course.service';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentService extends CrudService<Enrollment> {
  myUserId: number;

  #rawEnrollments: Partial<Enrollment>[] = rawEnrollments;

  #myEnrollments: BehaviorSubject<Partial<Enrollment>[]> = new BehaviorSubject<
    Partial<Enrollment>[]
  >(null);
  myEnrollments$: Observable<Partial<Enrollment>[]> =
    this.#myEnrollments.asObservable();

  #enrollments: BehaviorSubject<Partial<Enrollment>[]> = new BehaviorSubject<
    Partial<Enrollment>[]
  >(null);
  enrollments$: Observable<Partial<Enrollment>[]> =
    this.#enrollments.asObservable();

  // NOTE: This might be a bad idea.
  #enrollment: BehaviorSubject<Partial<Enrollment>> = new BehaviorSubject<
    Partial<Enrollment>
  >(null);
  enrollment$: Observable<Partial<Enrollment>> =
    this.#enrollment.asObservable();

  constructor(public user: UserService, public course: CourseService) {
    super();
  }

  getAllForMe(): void {
    this.user.currentUser$.subscribe((user: User) => (this.myUserId = user.id));
    this.#myEnrollments.next(
      this.#rawEnrollments.filter(
        (enrollment) => enrollment.userId === this.myUserId
      )
    );
  }

  getAllForUser(id: number): void {
    this.#enrollments.next(
      this.#rawEnrollments.filter((enrollment) => enrollment.userId === id)
    );
  }

  getForUserCourse(userId: number, courseId: number): void {
    this.#enrollment.next(
      this.#rawEnrollments.find(
        (enrollment) =>
          enrollment.userId === userId && enrollment.courseId === courseId
      )
    );
  }

  saveEnrollment(enrollment: Partial<Enrollment>): void {
    const newEnrollment = {
      ...enrollment,
      course: getRawCourse(enrollment.courseId),
    };
    this.#rawEnrollments.push(newEnrollment);
    if (enrollment.userId === this.myUserId) {
      this.getAllForMe();
      // const newArray = [
      //   ...new Set([
      //     ...this.#rawEnrollments.filter(
      //       (enrollment) => enrollment.userId === this.myUserId
      //     ),
      //     enrollment,
      //   ]),
      // ];
      // this.#myEnrollments.next(newArray);
    }
  }

  removeEnrollment(enroll: Partial<Enrollment>): void {
    this.#rawEnrollments = this.#rawEnrollments.filter(
      (enrollment) => enrollment.id !== enroll.id
    );

    this.getAllForMe();

    // this.#myEnrollments.next(
    //   this.#rawEnrollments.filter(
    //     (enrollment) => enrollment.userId === this.myUserId
    //   )
    // );
  }
}
