import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { ContentViewerModule } from '../content-viewer';
import { Components, ComponentsExport } from './components';
import { Pipes } from './pipes';

@NgModule({
  imports: [SharedModule, ContentViewerModule],
  declarations: [...Components, ...Pipes],
  exports: [...ComponentsExport],
})
export class PlaylistModule {}
