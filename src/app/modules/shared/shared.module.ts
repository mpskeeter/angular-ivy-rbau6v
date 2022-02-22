import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Components, ComponentsExport } from './components';
import { Pipes } from './pipes';

export const ModulesExport = [CommonModule, RouterModule];

@NgModule({
  imports: [...ModulesExport],
  declarations: [...Components, ...Pipes],
  exports: [...ModulesExport, ...ComponentsExport, ...Pipes],
})
export class SharedModule {}
