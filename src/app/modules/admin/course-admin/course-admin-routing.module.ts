import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  LayoutComponent,
  CourseAdminComponent,
  CourseTableComponent,
} from './components';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'list',
        component: CourseTableComponent,
      },
      {
        path: 'add',
        component: CourseAdminComponent,
      },
      {
        path: 'edit/:id',
        component: CourseAdminComponent,
      },
      { path: '**', pathMatch: 'full', redirectTo: 'list' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseAdminRoutingModule {}
