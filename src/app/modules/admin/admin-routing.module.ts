import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'user',
        loadChildren: () =>
          import('./user-admin/user-admin.module').then(
            (m) => m.UserAdminModule
          ),
      },
      {
        path: 'course',
        loadChildren: () =>
          import('./course-admin/course-admin.module').then(
            (m) => m.CourseAdminModule
          ),
      },
      {
        path: 'playlist',
        loadChildren: () =>
          import('./playlist-admin/playlist-admin.module').then(
            (m) => m.PlaylistAdminModule
          ),
      },
      { path: '**', pathMatch: 'full', redirectTo: 'user' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
