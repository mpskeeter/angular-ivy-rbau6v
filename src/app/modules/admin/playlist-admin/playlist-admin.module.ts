import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { FormModule } from '../../form';
import { PlaylistAdminRoutingModule } from './playlist-admin-routing.module';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [SharedModule, FormModule, PlaylistAdminRoutingModule],
  declarations: [...Components],
  exports: [...ComponentsExport],
})
export class PlaylistAdminModule {}
