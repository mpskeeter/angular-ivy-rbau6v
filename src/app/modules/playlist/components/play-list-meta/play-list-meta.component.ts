import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-play-list-meta',
  templateUrl: './play-list-meta.component.html',
})
export class PlayListMetaComponent {
  @Input() lessonsWatched: number = 0;
  @Input() progress: number = 0;
  @Input() numberOfLessons: number = 0;
  @Input() autoPlay: boolean = true;
  @Output() autoPlayChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  percentProgress(): string {
    return `${this.progress}%`;
  }

  toggleAutoPlay() {
    this.autoPlay = !this.autoPlay;
    this.autoPlayChange.emit(this.autoPlay);
  }
}
