import { User } from './user.interface';
import { Course } from './course.interface';

export interface UserCourse {
  userId: number;
  courseId: number;

  user: Partial<User>;
  course: Partial<Course>;
}
