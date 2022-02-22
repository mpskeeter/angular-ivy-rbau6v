import { LayoutComponent } from './layout';
import { UserAdminComponent } from './user-admin';
import { UserTableComponent } from './user-table';

export const ComponentsExport = [];

export const Components = [
  ...ComponentsExport,
  LayoutComponent,
  UserAdminComponent,
  UserTableComponent,
];

export * from './layout';
export * from './user-admin';
export * from './user-table';
