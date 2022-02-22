import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { rawCourses } from './rawData';
import { Course, CourseCategory, Tag } from '../../shared-types';

@Injectable({ providedIn: 'root' })
export class CourseService {
  #localCourses: Partial<Course>[] = rawCourses;

  #currentCourseId: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  currentCourseId$: Observable<number> = this.#currentCourseId.asObservable();

  #courses: BehaviorSubject<Partial<Course>[]> = new BehaviorSubject<
    Partial<Course>[]
  >(null);
  courses$: Observable<Partial<Course>[]> = this.#courses.asObservable();

  #course: BehaviorSubject<Partial<Course>> = new BehaviorSubject<
    Partial<Course>
  >(null);
  course$: Observable<Partial<Course>> = this.#course.asObservable();

  #tag: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  tag$: Observable<number> = this.#tag.asObservable();

  constructor() {}

  sort = (n1, n2) => {
    if (n1.id > n2.id) {
      return 1;
    }

    if (n1.id < n2.id) {
      return -1;
    }

    return 0;
  };

  getRaw(id: number): Partial<Course> {
    return this.#localCourses.find((course) => course.id === id);
  }

  getAll() {
    this.#courses.next(this.#localCourses.sort(this.sort));
  }

  getAllForTag(tagId: number) {
    const courses = this.#localCourses.filter((course) =>
      course.tags.some((tag: Partial<Tag>) => tag.id === tagId)
    );
    this.#courses.next(courses.sort(this.sort));
  }

  getAllForCategory(categoryId: number) {
    const courses = this.#localCourses.filter((course) =>
      course.categories.some(
        (category: Partial<CourseCategory>) => category.id === categoryId
      )
    );
    this.#courses.next(courses.sort(this.sort));
  }

  getOne(id: number) {
    const course = this.#localCourses.find(
      (course: Partial<Course>) => course.id === id
    );
    this.#course.next(course);
  }

  save(course: Partial<Course>) {
    if (course.id > 0) {
      // this.#localCourses = [...this.#localCourses, course];
      this.#localCourses = this.#localCourses.filter(
        (filterCourse: Partial<Course>) => filterCourse.id !== course.id
      );
      this.#localCourses = [...this.#localCourses, course];
    } else {
      course.id =
        Math.max(...this.#localCourses.map((courseItem) => courseItem.id)) + 1;
      this.#localCourses.push(course);
    }
    this.#courses.next(this.#localCourses.sort(this.sort));
    this.#course.next(course);
  }

  delete(courseId: number) {
    if (courseId > 0) {
      this.#localCourses = this.#localCourses.filter(
        (filterCourse: Partial<Course>) => filterCourse.id !== courseId
      );
      this.#courses.next(this.#localCourses.sort(this.sort));
    }
  }
}
