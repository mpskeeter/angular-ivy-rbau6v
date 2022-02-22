import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { map, take, takeUntil, tap } from 'rxjs/operators';
import { PlayListService } from '../../../shared';
import {
  PlayListItem,
  PlayListSource,
  PlayListVm,
} from '../../../shared-types';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
})
export class VideoPlayerComponent implements OnInit, OnDestroy {
  lastItem: Partial<PlayListItem> = {};
  currentItem: Partial<PlayListItem> = {};
  source: Partial<PlayListSource> = {};
  currentSourceSeq: number = 0;
  autoPlay: boolean = false;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(public service: PlayListService) {}

  ngOnInit(): void {
    combineLatest([
      this.service.items$,
      this.service.currentItem$,
      this.service.currentSource$,
      this.service.sources$,
      this.service.autoPlay$,
    ])
      .pipe(
        // tap(
        // 	([
        // 		items,
        // 		currentItem,
        // 		currentSource,
        // 		sources,
        // 		// lessonsWatched,
        // 		autoplay,
        // 	]) =>
        // 		console.log(
        // 			'video-player:ngOnInit:{currentItem,currentSource,sources,autoplay}:',
        // 			{
        // 				items,
        // 				currentItem,
        // 				currentSourceSeq: currentSource,
        // 				sources,
        // 				// lessonsWatched,
        // 				autoplay,
        // 			}
        // 		)
        // ),
        map(([items, currentItem, currentSource, sources, autoplay]) => {
          if (items && currentItem && currentSource) {
            this.lastItem = items[items.length - 1];
            this.currentItem = currentItem;
            this.currentSourceSeq = currentSource;
            this.autoPlay = autoplay;
            this.source = sources?.find(
              (source: PlayListSource) => source.seq === this.currentSourceSeq
            );
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onVideoEnded() {
    const maxSource = this.currentItem.sources.reduce((p, c) =>
      p.seq > c.seq ? p : c
    );
    const lessonCompleted = this.currentSourceSeq === maxSource.seq;
    if (lessonCompleted) {
      this.service.setLessonWatched(this.currentItem.id);
      this.currentItem.seq !== this.lastItem.seq
        ? this.service.setCurrentItem(this.currentItem.seq + 1)
        : null;
    } else {
      this.currentSourceSeq++;
      this.service.setCurrentSource(this.currentSourceSeq);
    }
  }
}
