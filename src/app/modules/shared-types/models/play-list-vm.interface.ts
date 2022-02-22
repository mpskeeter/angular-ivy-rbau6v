import { PlayListSource } from './play-list-source.interface';
import { PlayListItem } from './play-list-item.interface';

export interface PlayListVm {
  playlist: Partial<PlayListItem>[];
  current: number;
  lessonsWatched: number[];
  currentSource: number;
  sources: Partial<PlayListSource>[];
  sourcePlaying: Partial<PlayListSource>;
  autoPlay?: boolean;
}
