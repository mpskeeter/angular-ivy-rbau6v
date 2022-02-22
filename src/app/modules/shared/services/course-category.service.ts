import { Injectable } from '@angular/core';
import { rawCourseCategory } from './rawData';
import { CourseCategory } from '../../shared-types';

@Injectable({ providedIn: 'root' })
export class CourseCategoryService extends CrudService<CourseCategory> {
  #categories: Partial<CourseCategory>[] = rawCourseCategory;
  constructor() {
    this.getAll();
  }

  public getAll(): void {
    this.setItems(this.#categories);
  }
}
