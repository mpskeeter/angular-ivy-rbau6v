import { PlayListItem } from './play-list-item.interface';

export interface PlayListState {
  playList: PlayListItem[];
  lessonsWatched: number;
  numberOfLessons: number;
}
