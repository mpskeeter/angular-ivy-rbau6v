import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NavbarItem } from '../../shared-types';

@Injectable({ providedIn: 'root' })
export class MenuService {
  #_adminMenu: Partial<NavbarItem>[] = [
    {
      link: '/admin/user',
      text: 'User',
    },
    {
      link: '/admin/course',
      text: 'Course',
    },
    {
      link: '/admin/playlist',
      text: 'Playlist',
    },
    {
      link: '/admin/role',
      text: 'Role',
    },
  ];

  #adminMenu: BehaviorSubject<Partial<NavbarItem>[]> = new BehaviorSubject<
    Partial<NavbarItem>[]
  >(null);
  public adminMenu$: Observable<Partial<NavbarItem>[]> =
    this.#adminMenu.asObservable();

  #_profileMenu: Partial<NavbarItem>[] = [
    {
      link: '/profile',
      text: 'Your Profile',
    },
    {
      link: '/settings',
      text: 'Settings',
    },
  ];

  #profileMenu: BehaviorSubject<Partial<NavbarItem>[]> = new BehaviorSubject<
    Partial<NavbarItem>[]
  >(null);
  public profileMenu$: Observable<Partial<NavbarItem>[]> =
    this.#profileMenu.asObservable();

  #_mainMenu: Partial<NavbarItem>[] = [
    {
      link: '/',
      icon: 'inventory',
      text: 'Home',
    },
    {
      link: '/course',
      icon: 'inventory',
      text: 'Courses',
    },
    {
      link: '/mycourses',
      icon: 'list',
      text: 'My Courses',
    },
    {
      link: '/admin',
      icon: 'settings',
      text: 'Admin',
    },
    {
      link: '/support',
      icon: 'settings',
      text: 'Support',
    },
  ];

  #mainMenu: BehaviorSubject<Partial<NavbarItem>[]> = new BehaviorSubject<
    Partial<NavbarItem>[]
  >(null);
  public mainMenu$: Observable<Partial<NavbarItem>[]> =
    this.#mainMenu.asObservable();

  constructor() {
    this.#adminMenu.next(this.#_adminMenu);
    this.#mainMenu.next(this.#_mainMenu);
    this.#profileMenu.next(this.#_profileMenu);
  }
}
