import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { FormModule } from '../../form';
import { CourseAdminRoutingModule } from './course-admin-routing.module';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [SharedModule, FormModule, CourseAdminRoutingModule],
  declarations: [...Components],
  exports: [...ComponentsExport],
})
export class CourseAdminModule {}
