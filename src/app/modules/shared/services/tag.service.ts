import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { rawTags } from './rawData';
import { Tag } from '../../shared-types';

@Injectable({ providedIn: 'root' })
export class TagService {
  #tags: BehaviorSubject<Partial<Tag>[]> = new BehaviorSubject<Partial<Tag>[]>(
    null
  );
  tags$: Observable<Partial<Tag>[]> = this.#tags.asObservable();

  #tag: BehaviorSubject<Partial<Tag>> = new BehaviorSubject<Partial<Tag>>(null);
  tag$: Observable<Partial<Tag>> = this.#tag.asObservable();

  constructor() {
    this.getAll();
  }

  public getAll(): void {
    this.#tags.next(rawTags);
  }
}
