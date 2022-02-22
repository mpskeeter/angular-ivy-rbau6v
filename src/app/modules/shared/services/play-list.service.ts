import { Injectable, ViewContainerRef } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { PlayList, PlayListItem, PlayListSource } from '../../shared-types';
import { rawPlayLists, getRawPlayList } from './rawData';

interface PlayableCompType {
  file: string;
  component: ComponentType<any>;
}

@Injectable({ providedIn: 'root' })
export class PlayListService {
  #playListData: Partial<PlayList>[] = rawPlayLists;

  #_lessonsWatched: number[] = [];

  #lessonsWatched: BehaviorSubject<number[]> = new BehaviorSubject<number[]>(
    null
  );
  lessonsWatched$: Observable<number[]> = this.#lessonsWatched.asObservable();

  // Current playlist
  #playlist: BehaviorSubject<Partial<PlayList>> = new BehaviorSubject<
    Partial<PlayList>
  >(null);
  playlist$: Observable<Partial<PlayList>> = this.#playlist.asObservable();

  // playlists
  #playlists: BehaviorSubject<Partial<PlayList>[]> = new BehaviorSubject<
    Partial<PlayList>[]
  >(null);
  playlists$: Observable<Partial<PlayList>[]> = this.#playlists.asObservable();

  // All items associated with the playlist
  #items: BehaviorSubject<Partial<PlayListItem>[]> = new BehaviorSubject<
    Partial<PlayListItem>[]
  >(null);
  items$: Observable<Partial<PlayListItem>[]> = this.#items.asObservable();

  // current sequence number of the playlist item
  #current: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  current$: Observable<number> = this.#current.asObservable();

  // current item of the playlist
  #currentItem: BehaviorSubject<Partial<PlayListItem>> = new BehaviorSubject<
    Partial<PlayListItem>
  >(null);
  currentItem$: Observable<Partial<PlayListItem>> =
    this.#currentItem.asObservable();

  // sources of item
  #sources: BehaviorSubject<Partial<PlayListSource>[]> = new BehaviorSubject<
    Partial<PlayListSource>[]
  >(null);
  sources$: Observable<Partial<PlayListSource>[]> =
    this.#sources.asObservable();

  #currentSource: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  currentSource$: Observable<number> = this.#currentSource.asObservable();

  #totalLessons: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  totalLessons$: Observable<number> = this.#totalLessons.asObservable();

  #autoPlay: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  autoPlay$: Observable<boolean> = this.#autoPlay.asObservable();

  #sourcePlaying: BehaviorSubject<Partial<PlayListSource>> =
    new BehaviorSubject<Partial<PlayListSource>>(null);
  sourcePlaying$: Observable<Partial<PlayListSource>> =
    this.#sourcePlaying.asObservable();

  constructor() {
    this.currentItem$.subscribe((currentItem) =>
      this.#sources.next(currentItem?.sources)
    );

    this.playlist$?.subscribe((playlist: Partial<PlayList>) => {
      if (playlist) {
        if (playlist.items) {
          const items: Partial<PlayListItem>[] = playlist.items?.map(
            (item: Partial<PlayListItem>, index: number) => {
              let newItem = {
                ...item,
                seq: index + 1,
                sources: item.sources.map(
                  (source: Partial<PlayListSource>, index: number) => ({
                    ...source,
                    seq: index + 1,
                  })
                ),
              };
              return newItem;
            }
          );
          playlist.items = items;
          this.#items.next(playlist.items);
        }
        this.#lessonsWatched.next(this.#_lessonsWatched);
        this.setCurrentItem(1);
      }
    });

    combineLatest([this.items$, this.current$])
      .pipe(
        // tap(
        // 	([items, current]) =>
        // 		items &&
        // 		current &&
        // 		console.log('items,current:', { items, current })
        // ),
        map(([items, current]) => {
          const item =
            items && current && items?.find((item) => item.seq === current);
          return item;
        })
      )
      .subscribe(
        (currentItem) => currentItem && this.#currentItem.next(currentItem)
      );

    combineLatest([this.sources$, this.currentSource$])
      .pipe(
        // tap(
        // 	([sources, current]) =>
        // 		sources && current && console.log('sources:', { sources, current })
        // ),
        map(([sources, current]) => {
          if (sources && current) {
            const sourcePlaying =
              sources &&
              current &&
              sources?.find((source) => source.seq === current);
            return sourcePlaying;
          }
        })
      )
      .subscribe(
        (sourcePlaying) =>
          sourcePlaying && this.#sourcePlaying.next(sourcePlaying)
      );
  }

  getAll() {
    this.#playlists.next(this.#playListData);
  }

  setAutoPlay(autoPlay: boolean) {
    this.#autoPlay.next(autoPlay);
  }

  getPlaylist(playlistId: number) {
    const pl = this.#playListData.find(
      (playlist) => (playlist.id = playlistId)
    );

    if (pl?.items) {
      const items = pl.items?.map((item, index) => ({
        seq: index + 1,
        ...item,
      }));

      pl.items = items;
    }

    this.#playlist.next(pl);
  }

  setCurrentItem(id: number) {
    this.#current.next(id);
    this.setCurrentSource(1);
  }

  setLessonWatched(id: number) {
    this.#_lessonsWatched = Array.from(new Set([...this.#_lessonsWatched, id]));
    this.#lessonsWatched.next(this.#_lessonsWatched);
  }

  setCurrentSource(id: number) {
    this.#currentSource.next(id);
  }

  save(playlist: PlayList) {
    this.#playListData.push(playlist);
  }
}
