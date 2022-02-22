import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared';
import { FormModule } from '../../form';
import { UserAdminRoutingModule } from './user-admin-routing.module';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [SharedModule, FormModule, UserAdminRoutingModule],
  declarations: [...Components],
  exports: [...ComponentsExport],
})
export class UserAdminModule {}
