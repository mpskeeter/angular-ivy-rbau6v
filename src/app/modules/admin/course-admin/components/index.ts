import { LayoutComponent } from './layout';
import { CourseAdminComponent } from './course-admin';
import { CourseTableComponent } from './course-table';

export const ComponentsExport = [];

export const Components = [
  ...ComponentsExport,
  LayoutComponent,
  CourseAdminComponent,
  CourseTableComponent,
];

export * from './layout';
export * from './course-admin';
export * from './course-table';
