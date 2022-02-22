import { Course } from './course.interface';
import { Base } from './base.interface';

export interface CourseCategory extends Base {
  image?: string;

  courses?: Partial<Course>[];
}
