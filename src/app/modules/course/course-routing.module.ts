import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  LayoutComponent,
  CourseCategoryListComponent,
  CourseDetailComponent,
  CourseLaunchComponent,
  CourseListComponent,
  CoursesAvailableComponent,
} from './components';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: CoursesAvailableComponent,
      },
      {
        path: 'tag/:id',
        component: CourseListComponent,
      },
      {
        path: 'category/:id',
        component: CourseCategoryListComponent,
      },
      {
        path: 'list',
        component: CourseListComponent,
      },
      {
        path: 'detail/:id',
        component: CourseDetailComponent,
      },
      {
        path: 'launch/:id',
        component: CourseLaunchComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
