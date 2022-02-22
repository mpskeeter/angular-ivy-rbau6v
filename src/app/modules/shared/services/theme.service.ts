import { ElementRef, Injectable, Inject, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { OverlayContainer } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  sessionName = 'theme';
  mode = ['swiss', 'neon'];

  public get isLight() {
    const sessionTheme = sessionStorage.getItem(this.sessionName);
    return sessionTheme === `theme-${this.mode[1]}`;
  }

  public set isLight(value: boolean) {
    sessionStorage.setItem(
      this.sessionName,
      `theme-${this.mode[value ? 1 : 0]}`
    );
  }

  toggleTheme = () => {
    this.isLight = !this.isLight;
    this.setOverlayContainerTheme();
  };

  constructor(
    @Inject(DOCUMENT) private document: any,
    public overlay: OverlayContainer
  ) {
    this.setOverlayContainerTheme();
  }

  setOverlayContainerTheme = () => {
    // const el = this.overlay.getContainer();
    const el = this.document.documentElement;

    const light = this.isLight ? 0 : 1;
    const add = `theme-${this.mode[light]}`;
    const remove = `theme-${this.mode[Math.abs(light - 1)]}`;

    el.classList.add(add);
    el.classList.remove(remove);
  };
}
