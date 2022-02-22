import { LayoutComponent } from './layout';
import { PlaylistAdminComponent } from './playlist-admin';
import { PlaylistTableComponent } from './playlist-table';

export const ComponentsExport = [];

export const Components = [
  ...ComponentsExport,
  LayoutComponent,
  PlaylistAdminComponent,
  PlaylistTableComponent,
];

export * from './layout';
export * from './playlist-admin';
export * from './playlist-table';
