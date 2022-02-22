import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PlayListService } from '../../../shared';
import { PlayListItem } from '../../../shared-types';

@Component({
  selector: 'app-play-list-item',
  templateUrl: './play-list-item.component.html',
})
export class PlayListItemComponent implements OnInit, OnDestroy {
  @Input() item: Partial<PlayListItem> = {};
  @Input() watched: boolean = false;

  destroy$: Subject<boolean> = new Subject<boolean>();

  currentItem: Partial<PlayListItem> = {};

  constructor(public service: PlayListService) {}

  ngOnInit() {
    this.service.currentItem$
      .pipe(takeUntil(this.destroy$))
      .subscribe((currentItem) => (this.currentItem = currentItem));
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
