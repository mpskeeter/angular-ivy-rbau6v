import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  LayoutComponent,
  UserAdminComponent,
  UserTableComponent,
} from './components';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'list',
        component: UserTableComponent,
      },
      {
        path: 'add',
        component: UserAdminComponent,
      },
      {
        path: 'edit/:id',
        component: UserAdminComponent,
      },
      { path: '**', pathMatch: 'full', redirectTo: 'list' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAdminRoutingModule {}
