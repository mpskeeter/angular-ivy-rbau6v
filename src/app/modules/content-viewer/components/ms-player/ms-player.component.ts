import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PlayListSource } from '../../../shared-types';
import { PlayListService } from '../../../shared';

@Component({
  selector: 'app-ms-player',
  templateUrl: './ms-player.component.html',
})
export class MsPlayerComponent implements OnInit, OnDestroy {
  sources: number = 0;
  playingIndex: number = 0;
  doc: string = '';

  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(public service: PlayListService) {}

  ngOnInit(): void {
    this.service.currentSource$
      .pipe(takeUntil(this.destroy$))
      .subscribe((index) => (this.playingIndex = index));

    this.service.sources$
      .pipe(takeUntil(this.destroy$))
      .subscribe((sources: Partial<PlayListSource>[]) => {
        this.doc = sources.find(
          (source) => source.seq === this.playingIndex
        ).url;
        this.sources = sources.length;
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
