import { LayoutComponent } from './layout';
import { BrandComponent } from './brand';
import { MenuItemComponent } from './menu-item';
import { UserProfileComponent } from './user-profile';

export const ComponentsExport = [LayoutComponent];

export const Components = [
  ...ComponentsExport,
  BrandComponent,
  MenuItemComponent,
  UserProfileComponent,
];
