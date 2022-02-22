import { VideoPlayerComponent } from './video-player';
import { MsPlayerComponent } from './ms-player';

export const ComponentsExport = [VideoPlayerComponent, MsPlayerComponent];

export const Components = [...ComponentsExport];

export * from './video-player';
export * from './ms-player';
