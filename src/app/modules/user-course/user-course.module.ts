import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';
import { CourseModule } from '../course';
import { UserCourseRoutingModule } from './user-course-routing.module';
import { Components, ComponentsExport } from './components';
import { Services } from './services';

@NgModule({
  imports: [CommonModule, SharedModule, UserCourseRoutingModule, CourseModule],
  declarations: [...Components],
  providers: [...Services],
  exports: [...ComponentsExport],
})
export class UserCourseModule {}
