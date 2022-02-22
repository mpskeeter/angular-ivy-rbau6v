import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCourseListComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: UserCourseListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserCourseRoutingModule {}
