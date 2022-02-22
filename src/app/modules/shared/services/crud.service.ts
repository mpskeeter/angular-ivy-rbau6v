import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class CrudService<T> {
  item: BehaviorSubject<Partial<T>> = new BehaviorSubject<Partial<T>>(null);
  item$: Observable<Partial<T>> = this.item.asObservable();

  items: BehaviorSubject<Partial<T>[]> = new BehaviorSubject<Partial<T>[]>(
    null
  );
  items$: Observable<Partial<T>[]> = this.items.asObservable();

  // This would actually be done by the api endpoint
  asc = (a: Partial<T>, b: Partial<T>, field: string): number => {
    return a[field] > b[field] ? 1 : a[field] < b[field] ? -1 : 0;
  };

  // This would actually be done by the api endpoint
  desc = (a: Partial<T>, b: Partial<T>, field: string): number => {
    return a[field] < b[field] ? 1 : a[field] > b[field] ? -1 : 0;
  };

  setItem(item: Partial<T>): void {
    this.item.next(item);
  }

  setItems(items: Partial<T>[]): void {
    this.items.next(items);
  }

  create() {}
  read() {}
  update() {}
  delete() {}
}
