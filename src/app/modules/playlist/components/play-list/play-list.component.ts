import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnDestroy,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Course, PlayListSource, PlayListVm } from '../../../shared-types';
import { PlayListService } from '../../../shared';
import {
  VideoPlayerComponent,
  MsPlayerComponent,
} from '../../../content-viewer';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
})
export class PlayListComponent implements OnInit, OnDestroy {
  @Input() course: Partial<Course>;
  @ViewChild('contentContainer', { read: ViewContainerRef, static: true })
  contentContainer;
  private componentRef: any;

  destroy$: Subject<boolean> = new Subject<boolean>();
  // currentItem: Partial<PlayListItem>;
  watched: number[] = [];
  lessonsWatched = 0;
  numberOfLessons = 0;

  vm: Partial<PlayListVm> = {};

  constructor(
    public service: PlayListService,
    private resolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    combineLatest([
      this.service.items$,
      this.service.currentItem$,
      this.service.currentSource$,
      this.service.lessonsWatched$,
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe(([items, currentItem, currentSource, lessonsWatched]) => {
        this.numberOfLessons = items?.length;
        this.lessonsWatched = lessonsWatched?.length;
        this.watched = lessonsWatched;
        const source = currentItem?.sources?.find(
          (source: PlayListSource) => source.seq === currentSource
        );
      });

    this.service.sourcePlaying$.subscribe((source) =>
      this.createContent(source)
    );
    this.service.getPlaylist(this.course.playlistId);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  isWatched(id: number) {
    return !!this.watched.find((viewed) => id === viewed);
  }

  async createContent(sourcePlaying: Partial<PlayListSource>) {
    if (sourcePlaying) {
      let component: Type<VideoPlayerComponent | MsPlayerComponent>;

      switch (sourcePlaying && sourcePlaying.mimeType) {
        case 'video/mp4':
          {
            let comp = await import(
              '../../../content-viewer/components/video-player/video-player.component'
            );
            component = comp.VideoPlayerComponent;
          }
          break;
        case 'application/mspowerpoint':
          {
            let comp = await import(
              '../../../content-viewer/components/ms-player/ms-player.component'
            );
            component = comp.MsPlayerComponent;
          }
          break;
      }

      if (this.componentRef) {
        this.componentRef.destroy();
      }

      const factory = this.resolver.resolveComponentFactory(component);
      this.componentRef = this.contentContainer.createComponent(factory);
    }
  }
}
