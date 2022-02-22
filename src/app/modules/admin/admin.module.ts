import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [CommonModule, AdminRoutingModule],
  declarations: [...Components],
  exports: [...ComponentsExport],
})
export class AdminModule {}
