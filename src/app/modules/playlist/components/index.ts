import { PlayListComponent } from './play-list';
import { PlayListItemComponent } from './play-list-item';
import { PlayListMetaComponent } from './play-list-meta';

export const ComponentsExport = [PlayListComponent];

export const Components = [
  ...ComponentsExport,
  PlayListMetaComponent,
  PlayListItemComponent,
];

export * from './play-list';
