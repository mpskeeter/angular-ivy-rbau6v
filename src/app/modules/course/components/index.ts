import { LayoutComponent } from './layout';
import { CourseCardComponent } from './course-card';
import { CourseCategoryListComponent } from './course-category-list';
import { CourseDetailComponent } from './course-detail';
import { CourseDisplayComponent } from './course-display';
import { CourseLaunchComponent } from './course-launch';
import { CourseListComponent } from './course-list';
import { CoursesAvailableComponent } from './courses-available';
import { EnrollButtonComponent } from './enroll-button';
import { LaunchButtonComponent } from './launch-button';
import { UserInfoComponent } from './user-info';

export const ComponentsExport = [
  CourseLaunchComponent,
  CourseListComponent,
  CourseDisplayComponent,
];

export const Components = [
  ...ComponentsExport,
  LayoutComponent,
  CoursesAvailableComponent,
  CourseCategoryListComponent,
  CourseCardComponent,
  CourseDetailComponent,
  EnrollButtonComponent,
  LaunchButtonComponent,
  UserInfoComponent,
];

export * from './layout';
export * from './course-card';
export * from './course-category-list';
export * from './course-detail';
export * from './course-launch';
export * from './course-list';
export * from './courses-available';
export * from './enroll-button';
export * from './launch-button';
export * from './user-info';
