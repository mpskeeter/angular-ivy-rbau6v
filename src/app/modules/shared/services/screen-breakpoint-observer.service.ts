import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { BehaviorSubject, Observable } from 'rxjs';

export enum Breakpoints {
  'XS' = 'xs',
  'SM' = 'sm',
  'MD' = 'md',
  'LG' = 'lg',
  'XL' = 'xl',
}

@Injectable({
  providedIn: 'root',
})
export class ScreenBreakpointObserverService {
  xsBreakpoint = ['(max-width:575.98px)'];
  smBreakpoint = ['(min-width:576px) and (max-width:767.98px)'];
  mdBreakpoint = ['(min-width:768px) and (max-width:1023.98px)'];
  lgBreakpoint = ['(min-width:1024px) and (max-width:1179.98px)'];
  xlBreakpoint = '(min-width:1280px)';

  #screenSizeObserver: BehaviorSubject<number> = new BehaviorSubject<number>(null);

  screenSizeObserver$: Observable<number> =
    this.#screenSizeObserver.asObservable();

  constructor(private breakpointObserver: BreakpointObserver) {
    this.initObservers();
  }

  private initObservers() {
    this.breakpointObserver
      .observe(this.xsBreakpoint)
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.#screenSizeObserver.next(1);
        }
      });
    this.breakpointObserver
      .observe(this.smBreakpoint)
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.#screenSizeObserver.next(2);
        }
      });
    this.breakpointObserver
      .observe(this.mdBreakpoint)
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.#screenSizeObserver.next(3);
        }
      });
    this.breakpointObserver
      .observe(this.lgBreakpoint)
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.#screenSizeObserver.next(4);
        }
      });
    this.breakpointObserver
      .observe(this.xlBreakpoint)
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.#screenSizeObserver.next(5);
        }
      });
  }
}
