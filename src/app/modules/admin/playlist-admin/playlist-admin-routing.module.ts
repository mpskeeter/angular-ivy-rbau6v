import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  LayoutComponent,
  PlaylistAdminComponent,
  PlaylistTableComponent,
} from './components';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'list',
        component: PlaylistTableComponent,
      },
      {
        path: 'add',
        component: PlaylistAdminComponent,
      },
      {
        path: 'edit/:id',
        component: PlaylistAdminComponent,
      },
      { path: '**', pathMatch: 'full', redirectTo: 'list' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaylistAdminRoutingModule {}
