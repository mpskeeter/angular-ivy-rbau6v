import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { rawCourseCategory, getRawCourseCategory } from './rawData';
import { CourseCategory } from '../../shared-types';

@Injectable({ providedIn: 'root' })
export class CourseCategoryService extends CrudService<CourseCategory> {
  #categories: Partial<CourseCategory>[] = rawCourseCategory;
  constructor() {
    super();
    this.getAll();
  }

  public get(id: number = 0): void {
    id
      ? this.item.next(this.#categories.find((cat) => cat.id === id))
      : this.items.next(this.#categories);
  }
}
